import { nuevoCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";
(function(){
    const formulario=document.querySelector('#formulario');
    formulario.addEventListener('submit', ValidarCliente);

    async function ValidarCliente(e){
        e.preventDefault();

        const nombre=document.querySelector('#nombre').value;
        const email=document.querySelector('#email').value;
        const telefono=document.querySelector('#telefono').value;
        const empresa=document.querySelector('#empresa').value;

       
        const cliente={
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        
        //crear una function que envie este objecto a la api
        await nuevoCliente(cliente);
        document.location.href='index.html';
  
    }

    function validar(objecto){
        return !Object.values(objecto).every(input => input !=='');
    }

})();
