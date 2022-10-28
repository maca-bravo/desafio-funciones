document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSeleccionado = 'blue';
    } else if (event.key === 's') {
    colorSeleccionado = 'green';
    } else if (event.key === 'd') {
    colorSeleccionado = 'red';
    } else if (event.key === 'f') {
    colorSeleccionado = 'yellow';
    }
    console.log(colorSeleccionado);

});