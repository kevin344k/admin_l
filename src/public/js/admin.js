const socket=io()

const spanOp=document.querySelector("#spanOp")
const spanProd=document.querySelector("#spanProd")
const irwin1Parpadeo=document.querySelector("#irwin1Parpadeo")


socket.on("admin",({producto,operador,nombre})=>{

   spanOp.innerHTML=operador
   spanProd.innerHTML=producto
})

socket.on("runner",(data)=>{
    console.log(data); 
    irwin1Parpadeo.style.backgroundColor=data
})
socket.on("stopped",(data)=>{
    console.log(data); 
    irwin1Parpadeo.style.backgroundColor=data
})
socket.on("changes",(data)=>{
    console.log(data); 
    irwin1Parpadeo.style.backgroundColor=data
})