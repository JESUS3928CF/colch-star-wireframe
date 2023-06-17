(() => {
    const formulario = document.querySelector('#formularioeditarrol');


    const submit = document.querySelector(
        '#formularioeditarrol input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado');
    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearRol);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearRol(e) {
        e.preventDefault();

        /// Validar el formulario
        validarRol();
    }

    function validarRol() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioeditarrol input[name="nombreGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        let isValidado = true;

        /// Lógica de validación
        //* Validaciones para el nombre
        if (nombre.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
                   isValidado = false 
        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
                 })
            isValidado = false; 
            
        }else if (!nombre.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre no puede ser un espacio',
                     })
                isValidado = false;  
        }
                
        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast(
                Swal.fire(
                    'Rol editado correctamente',
                    '',
                    'success'
            ));
        }
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toastEditar'); //* Seleccionamos el toast que esta en nuestro HTML
        const toastBody = document.querySelector('#toast-body-editar'); //* Y también el body para agregar contenido a nuestro toast
        /// Creamos la instancia
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        /// Mostrando el mensaje
        toast.show();
    }
})();
