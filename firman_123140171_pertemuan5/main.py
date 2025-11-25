from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id         
        self.__title = title            

    @property
    def title(self):
        return self.__title

    @abstractmethod
    def display_info(self):
        """Method abstract yang wajib dioverride oleh subclass"""
        pass

class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self._author = author

    def display_info(self):
        return f"[BOOK] ID: {self._item_id} | Judul: {self.title} | Penulis: {self._author}"

class Magazine(LibraryItem):
    def __init__(self, item_id, title, publisher):
        super().__init__(item_id, title)
        self._publisher = publisher

    def display_info(self):
        return f"[MAGAZINE] ID: {self._item_id} | Judul: {self.title} | Penerbit: {self._publisher}"

class Library:
    def __init__(self):
        self.__items = []  

    def add_item(self, item: LibraryItem):
        self.__items.append(item)
        print("Item berhasil ditambahkan!\n")

    def show_items(self):
        if not self.__items:
            print("Belum ada item di perpustakaan.\n")
            return

        print("=== Daftar Item Perpustakaan ===")
        for item in self.__items:
            print(item.display_info())
        print()

    def search_item(self, keyword):
        print(f"Hasil pencarian untuk: {keyword}")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower() or keyword == item._item_id:
                print(item.display_info())
                found = True

        if not found:
            print("Tidak ditemukan item yang cocok.\n")
        print()

def main():
    library = Library()

    while True:
        print("=== Sistem Manajemen Perpustakaan ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Lihat Semua Item")
        print("4. Cari Item")
        print("5. Keluar")

        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            item_id = input("Masukkan ID: ")
            title = input("Masukkan Judul: ")
            author = input("Masukkan Penulis: ")
            library.add_item(Book(item_id, title, author))

        elif pilihan == "2":
            item_id = input("Masukkan ID: ")
            title = input("Masukkan Judul: ")
            publisher = input("Masukkan Penerbit: ")
            library.add_item(Magazine(item_id, title, publisher))

        elif pilihan == "3":
            library.show_items()

        elif pilihan == "4":
            keyword = input("Masukkan judul atau ID yang dicari: ")
            library.search_item(keyword)

        elif pilihan == "5":
            print("Program selesai.")
            break

        else:
            print("Pilihan tidak valid.\n")


if __name__ == "__main__":
    main()
