const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// const selects = document.getElementById('revista')

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,12}$/, // 7 a 12 numeros.
    dni: /^[0-9]{8}[A-Z]$|[A-Va-w][0-9]{7}[0-9A-Ja]$/,
    // dni: /^[0-9XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
    // dni: /(^([0-9]{8,8}\-[A-Z])|^)$/ //El DNI debe de estar formado por 8 caracteres que estén entre el 0 y el 9, seguidos por un guión "-" y acabados con una letra mayúscula.
}




//comprobar que todos los campos estén correctos
const campos = {
    usuario: false,
    nombre: false,
    apellidos: false,
    dni: false,
    password: false,
    correo: false,
    telefono: false,
    revista: false,
}

const validarFormulario = (e) => {
   switch (e.target.name) {
    case "usuario":
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario i').classList.add('fa-check-circle');
            document.querySelector('#grupo__usuario i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['usuario'] = true;
        } else {
            document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__usuario i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__usuario i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['usuario'] = false;
        }  
        break;

    case "nombre":
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
            document.querySelector('#grupo__nombre i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['nombre'] = true;
        } else {
            document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__nombre i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['nombre'] = false;
        }  
        break;
   
    case "apellidos":
        if(expresiones.apellidos.test(e.target.value)){
            document.getElementById('grupo__apellidos').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__apellidos').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__apellidos i').classList.add('fa-check-circle');
            document.querySelector('#grupo__apellidos i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__apellidos .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['apellidos'] = true;
        } else {
            document.getElementById('grupo__apellidos').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__apellidos').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__apellidos i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__apellidos i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__apellidos .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['apellidos'] = false;
        }  
        break;
   
    case "password":
        if(expresiones.password.test(e.target.value)){
            document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__password i').classList.add('fa-check-circle');
            document.querySelector('#grupo__password i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['password'] = true;
        } else {
            document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__password i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__password i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['password'] = false;
        }
        validarPassword2();  
        break;

    case "password2":
        validarPassword2();
        campos['password2'] = true;
        break;
   
    case "correo":
        if(expresiones.correo.test(e.target.value)){
            document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__correo i').classList.add('fa-check-circle');
            document.querySelector('#grupo__correo i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['correo'] = true;
        } else {
            document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__correo i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__correo i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['correo'] = false;
        }  
        break;

    case "correo2":
        validarCorreo2();
        campos['correo2'] = true;
        break;
   
    case "telefono":
        if(expresiones.telefono.test(e.target.value)){
            document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__telefono').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__telefono i').classList.add('fa-check-circle');
            document.querySelector('#grupo__telefono i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['telefono'] = true;
        } else {
            document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__telefono').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__telefono i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__telefono i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['telefono'] = false;
        }  
        break;

    case "revista":
        validarRevista();
        campos['revista'] = true;
    break;
        
    case "dni":
        if(expresiones.dni.test(e.target.value)){
            document.getElementById('grupo__dni').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__dni').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__dni i').classList.add('fa-check-circle');
            document.querySelector('#grupo__dni i').classList.remove('fa-circle-exclamation');
            document.querySelector('#grupo__dni .formulario__input-error').classList.remove('formulario__input-error-activo');
            campos['dni'] = true;
        } else {
            document.getElementById('grupo__dni').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__dni').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__dni i').classList.add('fa-circle-exclamation');
            document.querySelector('#grupo__dni i').classList.remove('fa-check-circle');
            document.querySelector('#grupo__dni .formulario__input-error').classList.add('formulario__input-error-activo');
            campos['dni'] = false;
        }  
        break;
   
   } 
}

//validar seleccion revista


// const validarRevista = () => {
//     const inputRevista = document.getElementById('revista');


//     if(inputRevista.value ==0 || inputRevista.value ==""){
//         document.getElementById('grupo__revista').classList.add('formulario__grupo-incorrecto');
//         document.getElementById('grupo__revista').classList.remove('formulario__grupo-correcto');
//         document.querySelector('#grupo__revista i').classList.add('fa-circle-exclamation');
//         document.querySelector('#grupo__revista i').classList.remove('fa-check-circle');
//         document.querySelector('#grupo__revista .formulario__input-error').classList.add('formulario__input-error-activo');
//         campos['password'] = false;
//     } else {
//         document.getElementById('grupo__revista').classList.remove('formulario__grupo-incorrecto');
//         document.getElementById('grupo__revista').classList.add('formulario__grupo-correcto');
//         document.querySelector('#grupo__revista i').classList.remove('fa-circle-exclamation');
//         document.querySelector('#grupo__revista i').classList.add('fa-check-circle');
//         document.querySelector('#grupo__revista .formulario__input-error').classList.remove('formulario__input-error-activo');
//         campos['revista'] = true;
//     }

function validarRevista() {
    let respuestaRevista = document.getElementById('revista');
    if (respuestaRevista.value==0 || respuestaRevista.value=='')
    {
        document.getElementById('grupo__revista').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__revista').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__revista .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['revista'] = false;
        respuestaRevista.focus();
    } else 
        document.getElementById('grupo__revista').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__revista').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__revista .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['revista'] = true;
        respuestaRevista.focus();
    
}






    

//validar la contraseña
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 i').classList.add('fa-circle-exclamation');
        document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 i').classList.remove('fa-circle-exclamation');
        document.querySelector('#grupo__password2 i').classList.add('fa-check-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}

//validar correo
const validarCorreo2 = () => {
    const inputCorreo1 = document.getElementById('correo');
    const inputCorreo2 = document.getElementById('correo2');

    if(inputCorreo1.value !== inputCorreo2.value){
        document.getElementById('grupo__correo2').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__correo2').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__correo2 i').classList.add('fa-circle-exclamation');
        document.querySelector('#grupo__correo2 i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__correo2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['correo'] = false;
    } else {
        document.getElementById('grupo__correo2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__correo2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__correo2 i').classList.remove('fa-circle-exclamation');
        document.querySelector('#grupo__correo2 i').classList.add('fa-check-circle');
        document.querySelector('#grupo__correo2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['correo'] = true;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// selects.forEach((select) => {
//     select.addEventListener('keyup', validarFormulario);
//     select.addEventListener('blur', validarFormulario);
// });

//al darle btn enviar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarRevista();

    const terminos = document.getElementById('terminos');
    //si todos los campos son correctos
    if(campos.usuario && campos.nombre && campos.apellidos && campos.password && campos.correo && campos.telefono && terminos.checked && campos.dni && campos.revista ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        //para que se borre después de un tiempo
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('formulario__grupo-correcto')
        });
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo') 
    } else {
        //ejecutar el mensaje de error
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});

