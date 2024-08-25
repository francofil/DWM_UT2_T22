function mostrarTamañoVentana() {
    // Obtener el ancho y alto de la ventana
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
    // Mostrar el tamaño en el párrafo
    const sizeDisplay = document.getElementById("sizeDisplay");
    sizeDisplay.textContent = `Tamaño de la ventana: ${ancho}px x ${alto}px`;
}

// Escuchar el evento resize
window.addEventListener("resize", mostrarTamañoVentana);

// Mostrar el tamaño de la ventana al cargar la página por primera vez
mostrarTamañoVentana();