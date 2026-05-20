const express = require('express');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Fungsi buat koneksi baru
function createConnection() {
  return mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

let db;

function connectWithRetry() {
  db = createConnection(); 
  db.connect((err) => {
    if (err) {
      console.error('Gagal koneksi, coba lagi dalam 3 detik...', err.message);
      db.destroy(); // Hapus koneksi lama
      setTimeout(connectWithRetry, 3000);
      return;
    }
    console.log('Berhasil konek ke MySQL!');

    db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL
      )
    `, (err) => {
      if (err) console.error('Gagal buat tabel:', err.message);
      else console.log('Tabel users siap!');
    });
  });
}

connectWithRetry();

app.get('/', (req, res) => {
  res.send('User Service API berjalan!');
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name dan email wajib diisi' });
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User berhasil ditambahkan', id: result.insertId });
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name dan email wajib diisi' });
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User tidak ditemukan' });
    res.json({ message: 'User berhasil diupdate' });
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User tidak ditemukan' });
    res.json({ message: 'User berhasil dihapus' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});