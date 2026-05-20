# Final Project Docker 

## Deskripsi Project
Aplikasi User Service berbasis REST API menggunakan Node.js dan MySQL
yang dijalankan dengan Docker Compose.

## Teknologi yang Digunakan
- Node.js + Express
- MySQL 8.0
- Docker & Docker Compose

## Cara Menjalankan
1. Clone repository ini
2. Masuk ke folder project
3. Jalankan perintah berikut:
   docker compose up --build

## Endpoint API
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | /users | Ambil semua user |
| POST | /users | Tambah user baru |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Hapus user |

## Struktur Project
```
project-app/
├── app/
│   ├── app.js
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env
│   └── package.json
└── docker-compose.yml
```

## Screenshot Pengujian API

### 1. GET /users - Ambil Semua User
![GET /users](<img width="479" height="360" alt="image" src="https://github.com/user-attachments/assets/5198b48f-51d8-45f1-9081-c3a5de6d1f19" />)

### 2. POST /users - Tambah User Baru
![POST /users](<img width="473" height="392" alt="image" src="https://github.com/user-attachments/assets/6d404398-841d-41aa-a98c-4b19663612f1" />)

### 3. GET /users - Hasil Setelah ditambahkan
![POST /users](<img width="475" height="434" alt="Screenshot 2026-05-20 182059" src="https://github.com/user-attachments/assets/7a5e0715-dfb1-4d0c-86f4-c2b9b33d2275" />)

### 4. PUT /users/:id - Update User
![PUT /users](<img width="476" height="383" alt="Screenshot 2026-05-20 181928" src="https://github.com/user-attachments/assets/2aa2929b-7002-4e5d-a72c-f7f9b6ecff79" />)

### 5. GET /users - Hasil Update User
![PUT /users](<img width="476" height="431" alt="Screenshot 2026-05-20 182025" src="https://github.com/user-attachments/assets/7a993eab-a012-45f4-aecf-b7c46a367c32" />)

### 6. DELETE /users/:id - Hapus User
![DELETE /users](<img width="474" height="389" alt="image" src="https://github.com/user-attachments/assets/798ad2c9-60f7-4257-80ea-48b3661ac136" />)
