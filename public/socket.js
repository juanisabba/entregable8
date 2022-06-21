const socket=io()

const usuario=document.getElementById("nombreUsuario")
const btnMessage= document.getElementById("btnMessage")
const message=document.getElementById("message")
const chatContainer=document.getElementById("chatContainer")

const registroTabla=document.getElementById("registroTabla")
const formProductos=document.getElementById("datosProductos")


socket.on("bienvenida", data=>{
    chatContainer.innerHTML = ""
    data.map(element=>{
        chatContainer.innerHTML+=`
        <div>
            <h1>${element.usuario}</h1><span>[${element.fecha}]</span>:
                <h4>${element.mensaje}</h4>
        </div>                
    `
})
})

btnMessage.addEventListener("click", (e)=>{
    socket.emit("mensajeCliente",{usuario:usuario.value, mensaje:message.value, fecha:(new Date()).toLocaleString()})
    message.value=""
    usuario.value=""
})

formProductos.addEventListener("submit", (e)=>{
    e.preventDefault()
    let name= document.getElementById("nombreProducto").value
    let price=document.getElementById("precioProducto").value
    let img=document.getElementById("imgProducto").value
    socket.emit("newProduct", {name, price, img})
    console.log(name)
    e.target.reset()
})

socket.on("mensajeProvedor", data=>{
    chatContainer.innerHTML+=`
        <div>
            <h1>${data.usuario}</h1><span>[${data.fecha}]</span>:
                <h4>${data.mensaje}</h4>
        </div>                
    `
})

socket.on("bdProductos", data=>{
    registroTabla.innerHTML=""
    data.map(product=>{
        registroTabla.innerHTML+=`
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.img}" width="50px" height="50px"></td>
        </tr>
        `
    })    
})
