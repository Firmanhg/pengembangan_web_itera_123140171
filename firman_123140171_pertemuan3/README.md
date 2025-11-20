# **Cyberpunk Book Manager — React App**

Aplikasi manajemen buku dengan tema **Cyberpunk Neon UI**, dilengkapi efek animasi glitch, neon beam intro, sidebar interaktif, hologram notification, draggable window, dan cursor-follow effect.

Aplikasi ini dibuat menggunakan:

* **React + Vite**
* **React Router**
* **Context API**
* **Custom Hooks**
* **LocalStorage Persistence**
* **Neon Cyberpunk Custom UI (Level 1–4)**

---

## **Fitur Utama**

### 1. **Tambah Buku**

* Input Judul, Penulis, Status (Dimiliki / Dipinjam)
* Tombol neon “Simpan” dengan efek glow

### 2. **Daftar Buku**

* Tabel cyberpunk dengan warna teal neon
* Tombol “Hapus” bercahaya
* Efek hover ala UI futuristic

### 3. **Sidebar Cyberpunk**

* Tema neon
* Mode collapse
* Animasi glowing cyan

### 4. **Router Halaman**

* `/` → Halaman Buku
* `/stats` → Statistik Buku

### 5. **Cyberpunk Enhancements Level 4**

* Neon Intro Beam
* Neon Grid Background
* Glitch Title Animation
* Cursor Follower (particle + glow)
* Hologram popup notification
* Draggable floating windows
* Smooth transition & fading UI

---

## **Struktur Folder**

```
src/
│
├── assets/
│
├── components/
│   ├── BookFilter.jsx
│   ├── BookForm.jsx
│   ├── BookList.jsx
│   ├── BookTable.jsx
│   ├── DraggableWindow.jsx
│   ├── Header.jsx
│   └── Sidebar.jsx
│
├── context/
│   └── BookContext.jsx
│
├── hooks/
│   ├── useBookStats.js
│   └── useLocalStorage.js
│
├── pages/
│   ├── Home.jsx
│   └── Stats.jsx
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── cursor.js
```

---

## **Cara Instalasi**

### Clone repository

```
git clone https://github.com/username/cyberpunk-book-manager.git
cd cyberpunk-book-manager
```

### Install dependencies

```
npm install
```

### Jalankan aplikasi

```
npm run dev
```

Aplikasi berjalan di:

```
http://localhost:5173/
```

---

## **Teknologi yang digunakan**

* React 18
* Vite
* React Router DOM
* Context API
* Custom Hooks
* LocalStorage API
* CSS Cyberpunk handcrafted
* Google Fonts (Orbitron)

---

## **Screenshot UI**

> Tambahkan screenshot dari aplikasi kamu:

```
public/screenshot-home.png
public/screenshot-stats.png
```

---

## **Fitur Masa Depan (Roadmap)**

* [ ] Mode “Augmented Reality Glow”
* [ ] Export data buku ke Excel / PDF
* [ ] Import library dari file JSON
* [ ] Mode Terminal Hacker
* [ ] Integrasi Firebase untuk cloud sync
* [ ] Animasi matrix-rain & sound FX neon

---

## **Kontribusi**

Pull request sangat diterima!
Silakan buat branch, lakukan improvement, dan open PR.

---

## **Lisensi**

MIT License – bebas digunakan, dimodifikasi, dan dikembangkan.

---

## **Tentang Project**

Cyberpunk Book Manager dibuat untuk memberikan pengalaman UI futuristik ala game **CYBERPUNK 2077**, namun dengan kesederhanaan struktur coding React yang mudah dipelajari.

---
