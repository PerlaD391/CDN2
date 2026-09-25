const Utileria = (function () {

    function validarCorreo(correo) {
        if (typeof correo !== 'string') return false;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo.trim());
    }

    function soloLetras(texto) {
        if (typeof texto !== 'string') return false;
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
        return regex.test(texto.trim());
    }

    function validarLongitud(numero, maxLongitud) {
        if (numero === null || numero === undefined) return false;
        const numeroStr = String(numero).replace(/\D/g, '');
        return numeroStr.length <= maxLongitud;
    }

    function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);

        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    }

    function esMayorDeEdad(fechaNacimiento) {
        return calcularEdad(fechaNacimiento) >= 18;
    }

    function validarPassword(password) {
        if (typeof password !== 'string') return false;

        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /\d/.test(password);
        const tieneEspecial = /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/~`;]/.test(password);
        const tieneLongitud = password.length >= 8;

        return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && tieneLongitud;
    }

    function formatearTelefono(telefono) {
        if (!telefono) return '';
        const limpio = String(telefono).replace(/\D/g, '');

        if (limpio.length === 10) {
            return limpio.slice(0, 3) + ' ' + limpio.slice(3, 6) + ' ' + limpio.slice(6);
        }

        return limpio;
    }

    function calcularIMC(peso, altura) {
        if (!peso || !altura || peso <= 0 || altura <= 0) return 'Datos inválidos';

        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) categoria = 'Bajo peso';
        else if (imc < 25) categoria = 'Peso normal';
        else if (imc < 30) categoria = 'Sobrepeso';
        else categoria = 'Obesidad';

        return imc.toFixed(2) + ' - ' + categoria;
    }

    return {
        validarCorreo: validarCorreo,
        soloLetras: soloLetras,
        validarLongitud: validarLongitud,
        calcularEdad: calcularEdad,
        esMayorDeEdad: esMayorDeEdad,
        validarPassword: validarPassword,
        formatearTelefono: formatearTelefono,
        calcularIMC: calcularIMC
    };

})();
