const butSearchCodeitems=document.querySelector("#butSearchCodeitems")
const inputCodeItem=document.querySelector("#inputCodeItem")
const inputDescItem=document.querySelector("#inputDescItem")
const inputprodFab=document.querySelector("#inputprodFab")
const inputRendimiento=document.querySelector("#inputRendimiento")
const inputEstadar=document.querySelector("#inputEstadar")
const form=document.querySelector("#form")
inputEstadar.value=""
inputRendimiento.value=""
inputprodFab.value=""
import {data} from "./items.js"
import {listadoMaquinas} from "./listadoMaquina.js"



function agregarMaqAlSelect(arr){
  const selectMaqNombre=document.querySelector("#selectMaqNombre")

 
  arr.forEach(e=>{
     const opt=document.createElement("option")
    opt.text=e.nombre
             selectMaqNombre.add(opt)    })
}

agregarMaqAlSelect(listadoMaquinas)



function findItem(){
    let  searchCode=inputCodeItem.value

const arr= data.find(function (e){
  return e.Item==searchCode
})
  console.log(arr)
  inputDescItem.value=arr.observacion
}

butSearchCodeitems.addEventListener("click",findItem)

inputprodFab.addEventListener("input",calcRendimiento)
function calcRendimiento(){
  if(inputEstadar.value !="" && inputprodFab.value !=""){
   inputRendimiento.value= ((inputprodFab.value/inputEstadar.value)*100).toFixed(2) + " %"
}
  
}



form.addEventListener("bubmit",e=>{
  //e.preventDefault()

})
