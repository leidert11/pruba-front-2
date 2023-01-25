tabla=document.querySelector('.table');
modal=document.querySelector('.container-modal')
agregar=document.querySelector('#añadir')
cancelar=document.querySelector('#cancelar')
guardar=document.querySelector('#guardar')
eliminar=document.querySelector('#descartar')

guardar.addEventListener('click', ()=>{
    modal.style.top='-100vh'
})

cancelar.addEventListener('click', ()=>{
    modal.style.top='-100vh'
})
id=0

guardar.addEventListener('click', ()=>{

    id++
    nombre=document.querySelector('#nombre').value;
    apellido=document.querySelector('#apellido').value;
    nit=document.querySelector('#nit').value;
    direccion=document.querySelector('#direccion').value;
    ciudad=document.querySelector('#ciudad').value;
    telefono=document.querySelector('#telefono').value;
    disponible=document.querySelector('#disponible').value;
    
    
    // if(uid!='' && referencia!='' && nombre!='' && categoria!='' && subcategoria!=''){
    if(nombre!='' && apellido!='' && nit!='' && direccion!='' && ciudad!='' && telefono!=''&&disponible!='' ){

    tabla.innerHTML+=`
    
        <tr class="fila-${id}">
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${nit}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
            <td>${telefono}</td>
            <td>${disponible}</td>
            <td>Activo</td>
        </tr>`
        modal.style.top='-100vh'
    }
    else{
        alert('campos vacios')
    }
});
eliminar.addEventListener('click',()=>{
    
    let fila=document.querySelector(`.fila-${id}`)
    fila.remove()
    id--
})


