const express = require('express');
const router = express.Router();

const baseforoAe = require('../models/baseForomodelo');

router.get('/', async (req, res) => {
  const posts = await baseforoAe.findAll();
  res.render('index', { posts });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
    console.log(req.body); // Agrega esta línea para verificar el cuerpo de la solicitud
    const { titulo, comentario, imagenURL, fecha_creacion } = req.body;
    await baseforoAe.create({ titulo, comentario, imagen: imagenURL, fecha_creacion });
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const postId = req.params.id;
    await baseforoAe.destroy({ where: { id: postId } });
    res.redirect('/');
  });
  
 
  
module.exports = router;
