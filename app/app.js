
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js'); 

const cors= require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static('../public'))

app.post('/postData', (req, res) => {
  const { titulo, comentario, imagen, fecha_creacion } = req.body;
console.log(req.body)
  const sql = 'INSERT INTO posts (titulo, comentario, imagen, fecha_creacion) VALUES (?, ?, ?, ?)';
  const values = [titulo, comentario, imagen, fecha_creacion];
console.log("asdasdabbe ",values)
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Datos insertados correctamente');
      res.json({ success: true });
    }
  });
});

const PORT =3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});