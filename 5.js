function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();
    
    if (isNaN(fechaNacimiento)) {
        alert("Por favor, introduce una fecha válida.");
        return;
    }

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    // Si el mes actual es menor al mes de nacimiento o es el mismo mes pero el día actual es menor, restamos 1 año
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultado').innerText = `Tienes ${edad} años.`;
}
