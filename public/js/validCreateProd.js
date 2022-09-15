window.addEventListener("load",function(){
    let formulario = document.getElementById('form_create');
    let campoNombre = document.getElementById('name');
    let descripcion = document.getElementById('description');

    campoNombre.focus();

    formulario.addEventListener('submit', function(e){
       let errores=[]

        if(campoNombre.value === "" ){
            errores.push('El campo nombre no puede estar vacio')
        }
         if(campoNombre.value.length < 2){
            errores.push(' El campo nombre tiene que tener al menos 2 caracteres')
        }
        if(descripcion.value === ""){
            errores.push('El campo decripcion no puede estar vacio')
        }
         if(descripcion.value.length < 8){
            errores.push('El campo descripcion tiene que tener al menos 15 caracteres')
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