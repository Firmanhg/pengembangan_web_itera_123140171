# Sistem Manajemen Perpustakaan Sederhana
Tugas Praktikum OOP Python

Program ini dibuat untuk memenuhi tugas pembuatan sistem manajemen perpustakaan dengan menerapkan konsep OOP:
- Abstract Class
- Inheritance
- Encapsulation
- Property Decorator
- Polymorphism

## Fitur Program
1. Menambahkan item (Book atau Magazine)
<img width="410" height="246" alt="Screenshot 2025-11-26 030649" src="https://github.com/user-attachments/assets/8711ff6b-0cce-4e3d-8726-0c5d0604c15e" />
<img width="419" height="250" alt="Screenshot 2025-11-26 030745" src="https://github.com/user-attachments/assets/65a603b6-0b8c-40a9-80fa-bd9b66823177" />

3. Menampilkan daftar item
<img width="785" height="207" alt="Screenshot 2025-11-26 030812" src="https://github.com/user-attachments/assets/41d79bf9-d31d-4ae8-aba2-85d409844c5e" />

5. Mencari item berdasarkan judul atau ID
<img width="827" height="241" alt="Screenshot 2025-11-26 030829" src="https://github.com/user-attachments/assets/05a2a183-dc79-4902-b1b7-2f27659c6e41" />

## Cara Menjalankan Program
1. Pastikan Python sudah terinstall
2. Buat file main.py
3. Copy paste kode program
4. Jalankan:
```
python main.py
```

## Diagram Class
```
         +--------------------+
         |   LibraryItem (AB) |
         +--------------------+
         | - _item_id         |
         | - __title          |
         +--------------------+
         | + display_info()   |
         +---------+----------+
                   |
       -------------------------
       |                       |
+--------------+       +----------------+
|    Book      |       |   Magazine     |
+--------------+       +----------------+
| - _author    |       | - _publisher   |
+--------------+       +----------------+
| + display_info()     | + display_info()
+--------------+       +----------------+
```

## Contoh Output
```
=== Sistem Manajemen Perpustakaan ===
1. Tambah Buku
2. Tambah Majalah
3. Lihat Semua Item
4. Cari Item
5. Keluar
Pilih menu:
```

