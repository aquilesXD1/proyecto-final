let registroExitoso = false; // Variable para controlar el segundo clic

function validarRegistro() {
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    // Validaciones de campos vacíos
    if (!nombres || !apellidos || !correo || !contraseña) {
        alert('Error: Debes llenar todos los campos del registro.');
        return false;
    }

    // Validación de nombres y apellidos (primera letra mayúscula, sin espacios, símbolos ni números)
    if (!/^[A-Z][a-zA-Z]*$/.test(nombres)) {
        alert('El nombre debe comenzar con mayúscula y solo contener letras.');
        return false;
    }

    if (!/^[A-Z][a-zA-Z]*$/.test(apellidos)) {
        alert('El apellido debe comenzar con mayúscula y solo contener letras.');
        return false;
    }

    // Validación de correo electrónico (longitud máxima de 19, contiene @)
    if (!correo.includes('@') || correo.length > 19) {
        alert('El correo electrónico debe contener @ y tener una longitud máxima de 19 caracteres.');
        return false;
    }

    // Validación de contraseña (9 dígitos)
    if (!/^\d{9}$/.test(contraseña)) {
        alert('La contraseña debe contener exactamente 9 dígitos.');
        return false;
    }

    // Si todas las validaciones pasan
    if (!registroExitoso) {
        alert('Registro exitoso. Haz clic nuevamente para ir al login.');
        registroExitoso = true; // Marca el registro como exitoso
        return false; // Evita el envío del formulario en el primer clic
    } else {
        window.location.href = './login.html'; // Redirige al login en el segundo clic
        return true; // Permite el envío del formulario (aunque no se enviará)
    }
}

function loginButton() {
    /*
    var user = $("#usuario").val();
    var password = $("#contraseña").val();
    
    if (user === "aquiles" && password === "123456") {
         window.location.href = "./compra.html";
    } else {
        $("#mensaje").text("Usuario o contraseña incorrectos.");
    }*/
   const loginForm = document.getElementById("loginForm");
   loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        var user = $("#usuario").val();
        var password = $("#contraseña").val();
        
        if (user === "aquiles" && password === "123456789") {
            window.location.href = "./index.html";
        } else {
            alert('contraseña incorrecta');
        }
   });
}

const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}


