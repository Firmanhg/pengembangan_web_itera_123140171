## **README.md**

# Dashboard Tugas – TUGAS FIRMAN H GULTOM || 123140171

Proyek ini merupakan dashboard interaktif untuk mengelola daftar tugas pribadi dengan tampilan profesional bertema **abu–hitam elegan**, dilengkapi dengan **jam real-time**, **cuaca Bandar Lampung**, dan fitur **CRUD (Create, Read, Update, Delete)** untuk tugas.

---

## Fitur Utama

### 1. Jam Real-Time
Menampilkan jam yang terus diperbarui setiap detik di pojok kanan atas header.

### 2. Cuaca Bandar Lampung
Mengambil data suhu terkini menggunakan API dari [Open-Meteo](https://open-meteo.com/).

### 3. Daftar Tugas (To-Do List)
Kamu dapat menambahkan tugas baru dengan nama, tanggal tenggat, dan prioritas:
- **Tambah tugas baru**
- **Edit nama dan prioritas tugas**
- **Edit tanggal tenggat dengan kalender pop-up**
- **Tandai tugas selesai atau batalkan**
- **Hapus tugas**
- Semua data **tersimpan otomatis di localStorage**

### 4. Statistik Otomatis
Menampilkan jumlah:
- Total tugas  
- Tugas selesai  
- Tugas aktif  

### 5. Tampilan Profesional
- Tema **gelap elegan** (abu–hitam)  
- Warna aksen **biru lembut (#38bdf8)**  
- Desain **modern dan responsif**  

---

## Struktur Folder

```

📁 Dashboard-Tugas-Firman/
│
├── index.html        # Halaman utama dashboard
├── style.css         # Desain dan tema (warna, tata letak)
├── script.js         # Logika interaktif (jam, cuaca, tugas)
└── README.md         # Dokumentasi proyek ini

````

---

## Cara Menjalankan Proyek

1. **Buka VSCode**
2. Buat folder baru, misalnya `Dashboard-Tugas-Firman`
3. Masukkan semua file berikut:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
4. Klik kanan pada `index.html` → pilih **"Open with Live Server"**  
   (Pastikan ekstensi *Live Server* sudah terpasang di VSCode)

---

## Panduan Penggunaan

| Aksi | Cara |
|------|------|
| ➕ Tambah tugas | Isi nama, pilih tenggat (kalender), pilih prioritas, klik **Tambah** |
| ✏️ Edit tugas | Klik tombol **Edit**, ubah nama & prioritas |
| 📅 Ubah tenggat | Klik kolom tanggal lalu pilih dari kalender pop-up |
| ✅ Tandai selesai | Klik tombol **Selesai** |
| ❌ Hapus tugas | Klik tombol **Hapus** |
| 🔄 Simpan otomatis | Semua perubahan langsung tersimpan di **localStorage** |

---

## API yang Digunakan
- [**Open-Meteo API**](https://api.open-meteo.com/)  
  → Menampilkan suhu saat ini di **Bandar Lampung**.

```js
fetch("https://api.open-meteo.com/v1/forecast?latitude=-5.45&longitude=105.26&current_weather=true")
````

---

## Teknologi yang Digunakan

* **HTML5** – struktur halaman
* **CSS3 (Flexbox)** – desain & layout
* **JavaScript (Vanilla JS)** – interaktivitas
* **LocalStorage** – penyimpanan data tugas
* **Open-Meteo API** – data cuaca real-time

---

## Pengembang

**Nama:** Firman H Gultom
**NIM:** 123140171
**Proyek:** Dashboard Manajemen Tugas
**Dibuat untuk:** Tugas Praktikum Pemrograman Web

---

## Tampilan Dashboard (Preview)

```
📊 Dashboard Pribadi
-------------------------------------
TUGAS FIRMAN H GULTOM || 123140171
[Jam Realtime] | Cuaca Bandar Lampung

Statistik:
Total Tugas: X | Selesai: Y | Aktif: Z

Daftar Tugas:
| Nama Tugas | Tenggat | Prioritas | Status | Aksi |
```

---

## Dokumentasi

### 1. Tampilan Dashboard
![WhatsApp Image 2025-10-27 at 17 41 57_0c45d70b](https://github.com/user-attachments/assets/760f55f0-e1bf-4250-98e0-8ea25695dc4b)

### 2. Menambahkan Tugas
![WhatsApp Image 2025-10-27 at 17 43 20_a57ec66b](https://github.com/user-attachments/assets/2259b26b-76a9-40aa-b407-83f89dbb9b05)

### 3. Mengedit Tugas Praktikum Jarkom dari Medium Menjadi High
![WhatsApp Image 2025-10-27 at 17 44 05_ab77a7b4](https://github.com/user-attachments/assets/0afabf3c-ea5a-40ab-97ff-b555e22f226b)

### 4. Menandakan Bahwa Tugas Telah Selesai
![WhatsApp Image 2025-10-27 at 17 44 28_95d99aad](https://github.com/user-attachments/assets/f1e2c5de-a32a-4385-a2d8-8d5fd27f3194)

### 5. Menghapus Tugas
![WhatsApp Image 2025-10-27 at 17 45 43_59bf7deb](https://github.com/user-attachments/assets/3c80c0d5-dd47-4fca-b90b-dcb445faf40d)


---

## Lisensi

Proyek ini dibuat untuk keperluan akademik.
Penggunaan ulang diizinkan dengan mencantumkan nama **Firman H Gultom (123140171)**
