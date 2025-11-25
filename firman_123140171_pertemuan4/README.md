# **README — Program Pengelolaan Data Nilai Mahasiswa**

## **Deskripsi Program**

Program ini dibuat untuk memenuhi tugas praktikum pemrograman Python dengan tujuan mengelola data nilai mahasiswa menggunakan struktur data **list** dan **dictionary**.
Program menyediakan fitur perhitungan nilai akhir, penentuan grade, pengelompokan data, serta pencarian nilai tertinggi dan terendah.

Program berjalan melalui menu interaktif di terminal.

---

## *Struktur Data**

Data mahasiswa disimpan dalam bentuk:

```python
mahasiswa_list = [
    {
        "nama": "Andi",
        "nim": "2023001",
        "nilai_uts": 80,
        "nilai_uas": 85,
        "nilai_tugas": 90
    },
    ...
]
```

Setiap mahasiswa menggunakan `dictionary`.
Kumpulan mahasiswa berupa `list`.

---

## **Perhitungan Nilai Akhir**

Nilai akhir dihitung dengan rumus:

```
30% UTS + 40% UAS + 30% Tugas
```

Contoh:

```
nilai_akhir = 0.3*UTS + 0.4*UAS + 0.3*Tugas
```

---

## **Kriteria Grade**

| Nilai Akhir | Grade |
| ----------- | ----- |
| ≥ 80        | A     |
| ≥ 70        | B     |
| ≥ 60        | C     |
| ≥ 50        | D     |
| < 50        | E     |

---

## **Fitur Program**

Program menyediakan fitur:

### 1. Menampilkan Data Mahasiswa
Dalam format tabel menggunakan **PrettyTable**.
<img width="756" height="287" alt="Screenshot 2025-11-26 011822" src="https://github.com/user-attachments/assets/a6dea91a-b7f0-43fa-8f34-f39db7b29426" />


### 2. Menginput Mahasiswa Baru
Pengguna bisa menambahkan data mahasiswa melalui menu.
<img width="368" height="186" alt="Screenshot 2025-11-26 011445" src="https://github.com/user-attachments/assets/4aecbcbf-2e39-487f-b515-3dc69f51b6e4" />

### 3. Mencari Nilai Tertinggi & Terendah
Program mengurutkan mahasiswa berdasarkan nilai akhir.
<img width="562" height="258" alt="Screenshot 2025-11-26 011839" src="https://github.com/user-attachments/assets/0f399fdc-380e-472d-9c44-34aa1c512320" />

### 4. Filter Berdasarkan Grade
Menampilkan mahasiswa berdasarkan grade tertentu.
<img width="565" height="291" alt="Screenshot 2025-11-26 011900" src="https://github.com/user-attachments/assets/ce91c393-19f8-4700-8dd5-af09bf2e454d" />

### 5. Menghitung Rata-rata Nilai Akhir Kelas
Menghasilkan nilai rata-rata dari seluruh mahasiswa.
<img width="340" height="241" alt="Screenshot 2025-11-26 011913" src="https://github.com/user-attachments/assets/9d1f0472-a706-445a-a296-fdf0d469c9d0" />

---

## **Cara Menjalankan Program**

### **1. Install PrettyTable**

Jalankan perintah di terminal:

```
pip install prettytable
```

### **2. Jalankan Program**

Gunakan perintah:

```
python program_nilai_mahasiswa.py
```

atau

```
python3 program_nilai_mahasiswa.py
```

---

## **Menu Program**

Saat dijalankan, program menampilkan:

```
=== PROGRAM NILAI MAHASISWA ===
1. Tampilkan Data Mahasiswa
2. Input Mahasiswa Baru
3. Cari Tertinggi dan Terendah
4. Filter Berdasarkan Grade
5. Hitung Rata-rata Kelas
6. Keluar
```

Pengguna cukup memilih angka 1–6.

---

## **Struktur File**

```
├── program_nilai_mahasiswa.py
└── README.md
```

---

## **Pembuat**

Nama: **Firman**
NIM: **123140171**
Mata Kuliah: **Praktikum Pemrograman**
Pertemuan: **4**

---
