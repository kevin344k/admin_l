const socket=io()

socket.on('server:hola',()=>{
  alert('hola estoy con vida')
})