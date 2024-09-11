    // Mostrar el video y el overlay
document.getElementById('show-video').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('video-container').style.display = 'block';
});

 // Cerrar el video y el overlay
 document.getElementById('close-video').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('video-iframe').src = 'https://www.youtube.com/embed/VqWLp9SzeyA?si=B_oWhnTBs-dtATTc'; // Detiene el video
    document.getElementById('video-iframe').src = 'https://www.youtube.com/embed/VqWLp9SzeyA?si=B_oWhnTBs-dtATTc'; // Restaura el video
});

 // Cerrar el video haciendo clic fuera del contenedor
 document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('video-iframe').src = 'https://www.youtube.com/embed/VqWLp9SzeyA?si=B_oWhnTBs-dtATTc'; // Detiene el video
    document.getElementById('video-iframe').src = 'https://www.youtube.com/embed/VqWLp9SzeyA?si=B_oWhnTBs-dtATTc'; // Restaura el video
});