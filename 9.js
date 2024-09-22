function validarCampo(campo) {
    const input = document.getElementById(campo);
    const errorIcon = document.getElementById(`error-${campo}`);
    let valido = true;
    let mensaje = "";

    errorIcon.style.display = 'none'; // Ocultar el icono de error al inicio

    switch (campo) {
        case 'nombre':
            if (!input.value) {
                mensaje = "El nombre es obligatorio.";
                valido = false;
            }
            break;
        case 'email':
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                mensaje = "Por favor, introduce un email válido.";
                valido = false;
            }
            break;
        case 'comentarios':
            if (input.value.length > 50) {
                mensaje = "Los comentarios no deben exceder los 50 caracteres.";
                valido = false;
            }
            break;
        case 'password':
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
            if (!passwordPattern.test(input.value)) {
                mensaje = "La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una letra minúscula y un dígito.";
                valido = false;
            }
            break;
    }

    if (!valido) {
        alert(mensaje);
        errorIcon.style.display = 'block'; // Mostrar el icono de error
    }
    return valido;
}

function validarFormulario() {
    let esValido = true;

    // Validar todos los campos
    ['nombre', 'email', 'comentarios', 'password'].forEach(campo => {
        if (!validarCampo(campo)) {
            esValido = false;
        }
    });

    return esValido;
}
