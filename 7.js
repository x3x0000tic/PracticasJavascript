function calcularPago() {
    const horasTrabajadas = parseInt(document.getElementById('horasTrabajadas').value);
    const tarifaHora = parseFloat(document.getElementById('tarifaHora').value);

    if (isNaN(horasTrabajadas) || isNaN(tarifaHora) || horasTrabajadas < 0 || tarifaHora <= 0) {
        alert("Por favor, ingresa valores válidos para las horas trabajadas y la tarifa por hora.");
        return;
    }

    let pagoTotal = 0;

    // Hasta 40 horas, se paga a tarifa normal
    if (horasTrabajadas <= 40) {
        pagoTotal = horasTrabajadas * tarifaHora;
    } else {
        // Pagar las primeras 40 horas a tarifa normal
        pagoTotal = 40 * tarifaHora;
        let horasExtras = horasTrabajadas - 40;

        // Si hay hasta 8 horas extras, se pagan al doble
        if (horasExtras <= 8) {
            pagoTotal += horasExtras * tarifaHora * 2;
        } else {
            // Si las horas extras son más de 8
            pagoTotal += 8 * tarifaHora * 2; // Las primeras 8 horas extras al doble
            horasExtras -= 8;
            pagoTotal += horasExtras * tarifaHora * 3; // El resto al triple
        }
    }

    document.getElementById('resultado').innerText = `El pago total es: $${pagoTotal.toFixed(2)}`;
}
