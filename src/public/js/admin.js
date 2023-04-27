import {listadoMaquinas} from "./listadoMaquina.js"
import {data} from "./items.js"
  const socket=io()

const spanOp=document.querySelector("#spanOp")
const spanProd=document.querySelector("#spanProd")
const irwin1Parpadeo=document.querySelector("#irwin1Parpadeo")
const divLisMaq=document.querySelector("#divLisMaq")
const butSearchCode=document.querySelector('#butSearchCode')
const inputCodeSearch=document.querySelector("#inputCodeSearch")
const nameProd=document.querySelector("#nameProd")

buscarMaqByarea(listadoMaquinas)

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
//codigo para buscar las maquinas y pintarlas en el index.html
function buscarMaqByarea(data){
  let areaSearch='Expandido'
  const arr= data.filter(function (e){
  return e.area==areaSearch
})
  console.log(arr)
showMaqHtml(arr)
}
  function showMaqHtml(arr){
    arr.forEach(e=>{
      let maq=document.createElement('div')
        maq.classList.add('mb-3','p-2','position-relative')
       maq.innerHTML=`
                    <!--este codigo se debe insertar desde js -->
           

<div class="row border border-primary-subtle d-flex">

<div class=" col-3 btn btn-primary p-2" data-bs-toggle="modal" data-bs-target="#modal1" >
                
                <div id=${e.cc}  class="position-absolute top-0 start-100                                   translate-middle"></div>

                  <span class="ico material-symbols-outlined">
                    precision_manufacturing </span
                  ><span class="align-middle" id="maquina">${e.nombre} </span>
</div>

<div class="col btn btn-white">
                
                  <span id="maquina">${e.producto} </span>
</div>
</div>


             
      `
 divLisMaq.append(maq)
      
    })
  }

function findItem(){
    let  searchCode=inputCodeSearch.value

const arr= data.find(function (e){
  return e.Item==searchCode
})
  console.log(arr)
  nameProd.value=arr.observacion
}

butSearchCode.addEventListener("click",findItem)


