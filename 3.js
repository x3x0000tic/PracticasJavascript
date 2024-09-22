document.getElementById('calcular').addEventListener('click', function() {
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);

    if (isNaN(totalCompra)) {
        document.getElementById('resultado').textContent = "Por favor, ingresa un valor válido.";
        return;
    }

    const descuento = totalCompra * 0.15;
    const totalFinal = totalCompra - descuento;

    document.getElementById('resultado').textContent = `Descuento: $${descuento.toFixed(2)} | Total a Pagar: $${totalFinal.toFixed(2)}`;
});
