function calcularUtilidad() {
    const salario = parseFloat(document.getElementById('salario').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);

    if (isNaN(salario) || isNaN(antiguedad) || salario <= 0 || antiguedad < 0) {
        alert("Por favor, ingresa valores válidos para el salario y la antigüedad.");
        return;
    }

    let porcentajeUtilidad = 0;

    if (antiguedad < 1) {
        porcentajeUtilidad = 5;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentajeUtilidad = 7;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentajeUtilidad = 10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentajeUtilidad = 15;
    } else if (antiguedad >= 10) {
        porcentajeUtilidad = 20;
    }

    const utilidad = (salario * porcentajeUtilidad) / 100;
    
    document.getElementById('resultado').innerText = `La utilidad anual es: $${utilidad.toFixed(2)} (${porcentajeUtilidad}% del salario mensual).`;
}
