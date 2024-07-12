const url='http://localhost:4000/clientes';

export const nuevoCliente= async cliente =>{
    try{
        await fetch(url,{
            method:'POST', //indica el metodo a mandar a la API
            body:JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'// le decimos que los datos son en JSON
            }
        });
    }catch(error){
        console.log(error);
    }
}

export const obtenerClientes= async () =>{
    try{
       const resultado= await fetch(url);
       const respuesta= await resultado.json();

       return respuesta;
    
    }catch(error){
        console.log(error);
    }
}


export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method:"DELETE",

        });
        
    } catch (error){
        console.error(error);
    }
}

export const buscarCliente = async id => {
    try {
        const response = await fetch(`${url}/${id}`);
        const cliente = await response.json();
        
        return cliente;
    } catch (error){
        console.error(error);
    }
}


export const actualizarCliente = async (link, datos) => {
    try {
        const response = await fetch(`${url}/${link}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el cliente');
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
