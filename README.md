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
project-app/
├── app/
│   ├── app.js
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env
│   └── package.json
└── docker-compose.yml
