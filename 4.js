const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0 || this.value > 10) {
            this.style.color = 'red'; 
            alert("La calificación debe estar entre 0 y 10.");
        } else {
            this.style.color = ''; 
        }
    });
});

function calcularCalificacion() {
    const cal1 = parseFloat(document.getElementById('cal1').value);
    const cal2 = parseFloat(document.getElementById('cal2').value);
    const cal3 = parseFloat(document.getElementById('cal3').value);
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    if ([cal1, cal2, cal3, examenFinal, trabajoFinal].some(cal => cal < 0 || cal > 10)) {
        alert("Todas las calificaciones deben estar entre 0 y 10.");
        return; 
    }

    const promedioParciales = (cal1 + cal2 + cal3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('resultado').innerText = `Tu calificación final es: ${calificacionFinal.toFixed(2)}`;
}
