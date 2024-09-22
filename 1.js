document.getElementById('calcular').addEventListener('click', function() {
    const capital = parseFloat(document.getElementById('capital').value);
    const tasa = parseFloat(document.getElementById('tasa').value) / 100;
    
    if (isNaN(capital) || isNaN(tasa)) {
        document.getElementById('resultado').textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const ganancia = capital * tasa;
    const total = capital + ganancia;
    
    document.getElementById('resultado').textContent = `Ganancia después de un mes: $${ganancia.toFixed(2)} | Total: $${total.toFixed(2)}`;
});
