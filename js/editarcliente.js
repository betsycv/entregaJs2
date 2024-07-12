import { buscarCliente, actualizarCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function() {
    document.addEventListener('DOMContentLoaded', async function() {
        const urlParams = new URLSearchParams(window.location.search);
        const idCliente = urlParams.get('id');

            const cliente = await buscarCliente(idCliente);

            document.querySelector('#nombre').value = cliente.nombre;
            document.querySelector('#email').value = cliente.email;
            document.querySelector('#telefono').value = cliente.telefono;
            document.querySelector('#empresa').value = cliente.empresa;

            const formulario = document.querySelector('#formulario');
            formulario.addEventListener('submit', async function(e) {
                e.preventDefault();

                const datosActualizados = {
                    nombre: document.querySelector('#nombre').value,
                    email: document.querySelector('#email').value,
                    telefono: document.querySelector('#telefono').value,
                    empresa: document.querySelector('#empresa').value
                };

                await actualizarCliente(idCliente, datosActualizados);

                document.location.href='index.html';
            });
    });
})();