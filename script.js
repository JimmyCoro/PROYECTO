// Cambiar de foto de fondo 
document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "url(IMG/Imge-fondo/IMG1.png)",
      "url(IMG/Imge-fondo/IMG2.png)",
      "url(IMG/Imge-fondo/IMG3.png)",
      "url(IMG/Imge-fondo/IMG4.png)",
      "url(IMG/Imge-fondo/IMG5.png)",
      "url(IMG/Imge-fondo/IMG6.png)",
      "url(IMG/Imge-fondo/IMG7.png)",
    ];
  
    const intervaloTiempo = 3000; // Cambia la imagen cada 3s
  
    // Función para cambiar la imagen de fondo
    function cambiarImagenDeFondo() {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageUrl = images[randomIndex];
      document.getElementById("background-container").style.backgroundImage = imageUrl;
    }
  
      setInterval(cambiarImagenDeFondo, intervaloTiempo);
  });

  //poner limite de la fecha
  var inputFecha = document.getElementById("fecha");
  var fechaActual = new Date();
  var fechaMinima = fechaActual.toISOString().split('T')[0];
  fechaActual.setDate(fechaActual.getDate() + 7);
  var fechaMaxima = fechaActual.toISOString().split('T')[0];
  inputFecha.max = fechaMaxima;
  inputFecha.min = fechaMinima;

