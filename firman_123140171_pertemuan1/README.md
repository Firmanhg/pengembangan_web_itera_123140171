# 📘 Aplikasi Manajemen Tugas Mahasiswa

Aplikasi ini membantu mahasiswa dalam mengelola aktivitas akademik seperti mencatat, memantau, dan menyelesaikan tugas kuliah secara efisien.  
Dibuat menggunakan **HTML, CSS, dan JavaScript (ES6+)**, dengan dukungan penyimpanan data menggunakan **localStorage** agar data tetap tersimpan meskipun halaman ditutup.

---

## Fitur Aplikasi

| Fitur | Deskripsi |
|-------|------------|
|  **Tambah Tugas** | Pengguna dapat menambahkan tugas baru dengan nama tugas, mata kuliah, dan deadline. |
|  **Edit Tugas** | Tugas yang sudah ditambahkan dapat diperbarui kapan saja. |
|  **Tandai Selesai** | Tugas dapat diberi status selesai/belum selesai. |
|  **Hapus Tugas** | Menghapus tugas yang sudah tidak diperlukan. |
|  **Pencarian & Filter** | Cari tugas berdasarkan mata kuliah atau status (selesai/belum selesai). |
|  **Statistik** | Menampilkan jumlah tugas yang belum selesai. |
|  **Validasi Form** | Input akan divalidasi agar tidak ada field kosong dan tanggal deadline valid. |
|  **Penyimpanan Lokal** | Semua data disimpan otomatis di `localStorage` dan dimuat kembali saat halaman dibuka ulang. |

---

## Validasi Form

Validasi dilakukan sebelum data disimpan agar input tetap konsisten dan mencegah error:

* Nama tugas **tidak boleh kosong**
* Mata kuliah **tidak boleh kosong**
* Deadline **harus diisi dan dalam format tanggal valid**
* Jika input tidak valid → akan muncul **alert peringatan** dan data tidak akan disimpan.

Contoh potongan kode validasi:

```js
if (!name || !course || !deadline) {
  alert("Semua field harus diisi dengan benar!");
  return;
}
```
---

## Screenshot Aplikasi

1. Halaman utama saat daftar tugas kosong
<img width="548" height="329" alt="image" src="https://github.com/user-attachments/assets/760db829-477f-49be-ae07-52bb2c9168f7" />

2. Saat menambahkan tugas baru
<img width="548" height="329" alt="image" src="https://github.com/user-attachments/assets/9f3dd663-db8d-4a1f-824d-3eea94c1cbd8" />

3. Fitur edit tugas
<img width="538" height="344" alt="image" src="https://github.com/user-attachments/assets/67539bca-9bf4-46c0-95b2-3e477731a893" />

4. Fitur Selesaikan
<img width="538" height="404" alt="image" src="https://github.com/user-attachments/assets/52f62800-b5bb-4e5a-a065-7db41bfac9ef" />
 
5. Tampilan daftar tugas dengan beberapa tugas selesai dan filter aktif
<img width="538" height="404" alt="image" src="https://github.com/user-attachments/assets/2308efc7-81f7-4d2c-88b3-e813346cac2a" />

---

## Struktur Folder

```plaintext
📁 manajemen-tugas/
│
├── index.html      → Struktur halaman utama aplikasi
├── style.css       → Desain UI dan tata letak
├── script.js       → Logika interaktif (CRUD, validasi, localStorage)
└── README.md       → Dokumentasi proyek
```

---

## Cara Menjalankan

1. Ekstrak semua file ke dalam satu folder (misalnya `manajemen-tugas`).
2. Buka file `index.html` menggunakan browser modern (Chrome, Edge, atau Firefox).
3. Tambahkan tugas menggunakan form yang tersedia.
4. Semua perubahan akan otomatis tersimpan di `localStorage`.

---

## Daftar Fitur yang Telah Diimplementasikan

| Kategori         | Fitur                                     | Status |
| ---------------- | ----------------------------------------- | ------ |
| CRUD             | Tambah, Edit, Hapus, Tandai Selesai       | ✅      |
| Penyimpanan Data | Menggunakan localStorage                  | ✅      |
| Validasi Form    | Cegah input kosong dan tanggal invalid    | ✅      |
| Filter / Search  | Berdasarkan mata kuliah atau status tugas | ✅      |
| Statistik        | Jumlah tugas belum selesai                | ✅      |
| UI/UX            | Desain responsif dan mudah digunakan      | ✅      |

---

## Penjelasan Teknis

Aplikasi ini menggunakan konsep **Object-Oriented Programming (OOP)** dengan **Class `TaskManager`** untuk mengelola seluruh operasi CRUD.

Beberapa fitur ES6+ yang diterapkan:

* **`let` dan `const`** untuk deklarasi variabel modern.
* **Arrow Functions (`=>`)** untuk fungsi singkat dan konsisten.
* **Template Literals** untuk menampilkan data dinamis di HTML.
* **Class & Method** untuk struktur kode rapi dan modular.
* **Async/Await** untuk simulasi pemuatan data dengan efek kecil.

---

**Kriteria Tugas Terpenuhi:**

* [x] CRUD tugas lengkap
* [x] Penyimpanan lokal (localStorage)
* [x] Validasi input
* [x] Filter & pencarian
* [x] Statistik tugas
* [x] Desain rapi dan fungsional
* [x] Dokumentasi lengkap

---

## Implementasi localStorage

Aplikasi ini menyimpan data tugas secara lokal di browser pengguna agar tidak hilang meskipun halaman direfresh.

- Menyimpan data:
  ```js
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
````

- Mengambil data:
  ```js
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  ```

- Data diperbarui **setiap kali pengguna menambah, mengedit, menghapus, atau menandai tugas selesai.**
