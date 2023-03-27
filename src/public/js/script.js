const socket=io()

const irwin1=document.querySelector("#irwin_1")
const nameOp=document.querySelector("#nameOp")
const nameProd=document.querySelector("#nameProd")
const myModal=document.getElementById("modal1")
const btnLoad=document.querySelector("#btnLoad")
const nameMachine=document.querySelector("#nameMachine")
const msg=document.querySelector("#msg")
const blockRun=document.querySelector("#blockRun")
const blockLoader=document.querySelector("#blockLoader")
const spanNamePag=document.querySelector("#spanNamePag")

blockRun.style.display="none"


irwin1.addEventListener("click",()=>{


  nameMachine.innerHTML=irwin1.value;

$('#modal1').modal('show')


})

btnLoad.addEventListener("click",()=>{
  if (nameOp.value=="" && nameProd.value=="") {
    let err=document.createElement("div")
    err.innerHTML=`<div class="alert alert-danger" role="alert">
     ¡Ingresa los datos!
  </div> `
    msg.appendChild(err)
 
  } else{
  if (socket.connected) {

   
    socket.emit("datosMaquina",{
      nombre:nameMachine.textContent,
      operador:nameOp.value,
      producto:nameProd.value
    })

    blockRun.style.display="block"
    blockLoader.style.display="none"
    $('#modal1').modal('hide')
    spanNamePag.textContent=` ${irwin1.value}( ${nameProd.value} ) `
    nameOp.value="" 
    nameProd.value=""
   
  } else{
    alert("Error de conexión, no se puede continuar")
    nameOp.value="" 
    nameProd.value=""
  }

  }
})

const butRun=document.querySelector("#butRun")
const stopped=document.querySelector("#stopped")
const change=document.querySelector("#change")


butRun.addEventListener("click",()=>{

  butRun.classList.add("butRun")


 setInterval(() => {
  socket.emit("run","run")
  console.log("run");

 }, 3000);



})
