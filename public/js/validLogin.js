window.addEventListener("load",function(){


    let campoContrasenia = document.getElementById('password');
    let campoEmail = document.getElementById('email');
    campoEmail.focus();

    let formulario = document.querySelector('.main-information');

    formulario.addEventListener('submit', function(e){
       let errores=[];
       //let errorEmail = document.getElementById('errorEmail');
       //let errorPassword= document.getElementById('errorPassword')
       
    
    
    

        if(campoEmail.value === "" ){
            errores.push('El campo Email no puede estar vacio')
            //errorEmail.innerText+='El campo Email no puede estar vacio'
        }
        else if(campoEmail.value.length < 2){
            errores.push(' tiene que ingesar un mail valido')
            //errorEmail.innerText+='tiene que ingesar un mail valido'
        }
        if(campoContrasenia.value === ""){
           errores.push('El campo contraseña no puede estar vacio')
           //errorPassword.innerText+='El campo Contraseña no puede estar vacio'
        }
        else if(campoContrasenia.value.length < 8){
            errores.push('La contraseña tiene que tener al menos 8 caracteres')
            //errorPassword.innerText+='La contraseña tiene que tener al menos 8 caracteres'
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
