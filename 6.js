function palabrasANumeros(arr) {
    const mapaNumeros = {
        'cero': 0,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
        'nueve': 9
    };

    return arr.map(palabra => {
        const palabraEnMinuscula = palabra.trim().toLowerCase(); 
        return mapaNumeros[palabraEnMinuscula] !== undefined ? mapaNumeros[palabraEnMinuscula] : -1;
    });
}

function convertirPalabras() {
    const inputPalabras = document.getElementById('inputPalabras').value;
    
    if (inputPalabras.trim() === "") {
        alert("Por favor ingresa palabras válidas.");
        return;
    }

    const arrPalabras = inputPalabras.split(',').map(palabra => palabra.trim()); 
    
    const resultadoNumeros = palabrasANumeros(arrPalabras);
    
    document.getElementById('resultado').innerText = `Resultado: [${resultadoNumeros.join(', ')}]`;
}
