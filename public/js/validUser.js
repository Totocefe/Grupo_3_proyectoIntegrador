window.addEventListener("load",function(){

    let campoApellido = document.getElementById('last_name');
    let campoEmail = document.getElementById('email');
    let campoContrasenia = document.getElementById('password');
    let campoNombre = document.getElementById('first_name');
    let formulario = document.getElementById('form_register');
    campoNombre.focus();


    formulario.addEventListener('submit', function(e){
       let errores= []
        if(campoNombre.value === ""){
            errores.push('El campo nombre no puede estar vacio')
        }
        if(campoNombre.value.length < 2){
            errores.push('El campo nombre tiene que tener al menos 2 caracteres')
        }
        if(campoApellido.value === ""){
            errores.push('El campo Apellido no puede estar vacio')
        }
        else if(campoApellido.value.length < 2){
            errores.push('El campo Apellido tiene que tener al menos 2 caracteres')
        }
        if(campoEmail.value === "" ){
            errores.push('El campo Email no puede estar vacio')
        }
        else if(!campoEmail.value.include('@','.') ){
            errores.push(' tiene que ingesar un mail valido')
        }
        if(campoContrasenia.value === ""){
            errores.push('El campo contraseña no puede estar vacio')
        }
        else if(campoContrasenia.value.length < 8){
            errores.push('La contraseña tiene que tener al menos 8 caracteres')
        }
        if(errores.length > 0){
            e.preventDefault()
            let ulErrores = document.querySelector('div.errores ul');
            errores.forEach(function(error) {
                ulErrores.innerHTML += '<li>' + error + '</li>'

            })
        }
        

    })

})
