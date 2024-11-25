# 🔥 🌟 𒆜 Todo List REST API 𒆜 🌟 🔥

## 📋 Deskripsi  
Aplikasi **Todo List REST API** adalah proyek berbasis web yang memungkinkan pengguna untuk:
- Menambahkan tugas baru bisa di POSTMAN dan Localhost.
- Melihat daftar tugas aktif di POSTMAN dan Localhost.
- Melihat riwayat tugas yang selesai dan dihapus dan untuk di hapus nilai Id nya akan terlihat telewat.
- Menghapus tugas secara dinamis melalui POSTMAN dan Localhost.

Aplikasi ini didesain dengan antarmuka yang modern dan responsif untuk pengalaman pengguna yang maksimal.

---

## 🚀 Fitur Utama  
1. **Tambah Tugas Baru**  
   - Inputkan nama dan task tugas.
   - Tugas baru langsung masuk ke daftar aktif dan History .

2. **Daftar Tugas Aktif**  
   - Menampilkan tugas yang sedang dikerjakan dalam tabel interaktif.

3. **Riwayat Tugas**  
   - Riwayat tugas selesai atau dihapus untuk referensi di masa mendatang.

5. **Hapus Tugas**  
   - Hapus tugas dari daftar aktif dengan satu klik.

6. **Dinamis dan Responsif**  
   - Dijalankan menggunakan AJAX untuk memastikan pengalaman yang mulus tanpa perlu reload halaman.

---

## 🛠️ Teknologi yang Digunakan  
1. **Frontend**  
   - **HTML5**: Struktur halaman.
   - **CSS**: Desain visual antarmuka.
   - **Font Awesome**: Ikon tambahan untuk mempercantik UI.
   - **JavaScript (AJAX)**: Untuk komunikasi dengan server REST API.

2. **Backend**  
   - REST API untuk mengelola data Todo List.

---

## 🎨 Tampilan Halaman  
1. **Form Tambah Tugas**  
   - Form sederhana dengan input untuk nama dan task.
2. **Tabel Tugas Aktif**  
   - Tabel berisi daftar tugas yang sedang berlangsung.
3. **Tabel Riwayat Tugas**  
   - Riwayat tugas selesai atau dihapus.

---

## 📂 Struktur File  
/todolist_project
├── index.php                    # Entry point aplikasi
├── api.php                      # API endpoint untuk operasi CRUD
├── .htaccess                    # Konfigurasi untuk URL rewriting
├── core
│   └── Database.php             # Koneksi database menggunakan PDO
│
├── Gambar_Hasil                 # Berisi Tampilan Hasil yang telah dibuat
│
├── models
│   ├── Todo.php                 # Model Todo yang merepresentasikan setiap task
│   └── TodoModel.php            # Model untuk operasi CRUD pada database
│
├── controllers
│   └── TodoController.php       # Controller untuk mengatur logika bisnis Todo
│
├── views
│   └── listTodos.php            # Template/view untuk menampilkan daftar Todo
│
└── assets
    ├── css
    │   └── style.css            # File CSS untuk styling
    └── js
        └── script.js            # File JavaScript untuk interaksi tambahan


---

## 💻 Cara Menjalankan  
1. Pastikan backend REST API berjalan di server.
2. Tempatkan file frontend sesuai struktur direktori:
   - CSS di `/assets/css/style.css`
   - JS di `/assets/js/script.js`
3. Buka file `index.html` di browser.

---

## 🌟 Preview  
**Tampilan Utama**:  
![Todo List Preview](Gambar%20Hasil/Get2.png)



---

## 📝 Lisensi  
&copy; 2024 Virzan Pasa Nugraha. All Rights Reserved.

---

README ini menjelaskan proyek secara menyeluruh dan memberikan informasi untuk membantu pengguna memahami serta menjalankan aplikasi. Apakah ada yang perlu ditambahkan? 😊