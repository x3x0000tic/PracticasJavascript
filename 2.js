document.getElementById('calcular').addEventListener('click', function() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);

    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        document.getElementById('resultado').textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const totalVentas = venta1 + venta2 + venta3;
    const comision = totalVentas * 0.10;
    const sueldoTotal = sueldoBase + comision;

    document.getElementById('resultado').textContent = `Comisiones: $${comision.toFixed(2)} | Sueldo Total: $${sueldoTotal.toFixed(2)}`;
});
