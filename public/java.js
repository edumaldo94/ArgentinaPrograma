function previewImage() {
    const imageUrl = document.getElementById('imagen').value;
    const imagePreview = document.getElementById('imagePreview');

    if (imageUrl) {
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.style.display = 'none';
    }
}

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo');
    const contenido = document.getElementById('comentario');
    const imagen = document.getElementById('imagen');
    const fecha = document.getElementById('fecha_creacion');
   
        let postData = {
          titulo: titulo.value,
          comentario: contenido.value,
          imagen: imagen.value,
          fecha_creacion: fecha.value
        }
        console.log('Titulo:', titulo.value);
        console.log('Contenido:', contenido.value);
        console.log('Imagen:', imagen.value);
        console.log('Fecha:', fecha.value);
        
        let formJson = JSON.stringify(postData);
        console.log(':', formJson);
        fetch('http://localhost:3000/postData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta del servidor:', data);
          alert('El post se ha creado exitosamente.');
        })
        .catch(error => console.error('Error al crear el post:', error));
      
      
      
      
      
      
  
});