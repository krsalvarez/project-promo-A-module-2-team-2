
    const previsualizacion = document.getElementById("previsualizacion");
    const nombre = previsualizacion.querySelector(".name");
    const lugar = previsualizacion.querySelector(".surname");
    const fechaHora = previsualizacion.querySelector(".date");
    const palettes = document.getElementsByName("palette");
  
    palettes.forEach((palette) => {
        palette.addEventListener("change", function() {
          // Eliminar las clases de color actuales
          previsualizacion.classList.remove("color-borde1", "color-borde2", "color-borde3");
          nombre.classList.remove("color-nombre1", "color-nombre2", "color-nombre3");
          lugar.classList.remove("color-lugar1", "color-lugar2", "color-lugar3");
          fechaHora.classList.remove("color-fecha-hora1", "color-fecha-hora2", "color-fecha-hora3");
      
          // Añadir las clases correspondientes en función de la paleta seleccionada
          if (palette.checked && palette.value === "palette1") {
            previsualizacion.classList.add("color-borde1");
            nombre.classList.add("color-nombre1");
            lugar.classList.add("color-lugar1");
            fechaHora.classList.add("color-fecha-hora1");
          } else if (palette.checked && palette.value === "palette2") {
            previsualizacion.classList.add("color-borde2");
            nombre.classList.add("color-nombre2");
            lugar.classList.add("color-lugar2");
            fechaHora.classList.add("color-fecha-hora2");
          } else if (palette.checked && palette.value === "palette3") {
            previsualizacion.classList.add("color-borde3");
            nombre.classList.add("color-nombre3");
            lugar.classList.add("color-lugar3");
            fechaHora.classList.add("color-fecha-hora3");
          }
        });
      });