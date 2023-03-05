const socket=io()



    const butRun=document.getElementById("butRun")

    butRun.addEventListener("click",()=>{
        setInterval(()=>{
        if (butRun.style.backgroundColor="#198754") {
        butRun.style.backgroundColor="white"
        butRun.style.color="#198754"
        console.log("VERDE")
        }
         setInterval(() => {
            if (butRun.style.backgroundColor="white") {
            butRun.style.backgroundColor="#198754" 
            butRun.style.color="white"
            console.log("bl")
        }
         }, 3000);
    }, 2000);
        
    })


   


socket.on('server:hola',()=>{
  alert('hola estoy con vida')
})