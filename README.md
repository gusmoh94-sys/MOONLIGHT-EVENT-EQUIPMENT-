# Moonlight Event Equipment

Website premium single-page + panel admin.

## Frontend
Buka `index.html`.

## Production backend
Folder `api/` dan `database/schema.sql` disiapkan sebagai fondasi PHP + MySQL.
Login admin memakai PHP session dan `password_verify`; jangan menyimpan password plaintext.

Sebelum online:
1. Import `database/schema.sql` ke MySQL.
2. Buat hash password dengan `password_hash('PASSWORD_ANDA', PASSWORD_DEFAULT)`.
3. Masukkan hash ke tabel `admins` dan sesuaikan koneksi DB.
4. Implementasikan endpoint CRUD + upload pada API sesuai tabel.
5. Lindungi folder uploads, validasi MIME/ukuran file, gunakan CSRF token dan HTTPS.
6. Ganti placeholder gambar dengan foto equipment/portfolio asli.

## Catatan
Versi yang diberikan sudah memiliki desain frontend dan kerangka admin. Fitur database/upload permanen membutuhkan PHP hosting + MySQL dan endpoint CRUD yang aktif.
