const tabla= document.querySelector('#cuerpo')
const Boton= document.getElementById('boton')
const nombre=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const telefono=document.getElementById('telefono')

const opciones={
    method: 'POST'
}

window.addEventListener('load',()=>{
    fetch('http://www.raydelto.org/agenda.php')
    .then(respuesta => respuesta.json())
    .then(datos=>{
        datos.forEach(element => {
            
            tabla.innerHTML +=`
            <tr>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.telefono}</td>
          </tr>
            `
        });
    })
})

boton.addEventListener('click', ()=>{
    async function postData(url = '',data={}){
        const response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    postData('http://www.raydelto.org/agenda.php',
{nombre: nombre.value, 
 apellido: apellido.value, 
 telefono:telefono.value})
.then(data =>{
    console.log(data);
    location.reload()
})

})