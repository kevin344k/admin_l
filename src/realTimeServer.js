 module.exports=httpServer=>{
     const {Server}=require('socket.io')
     const io=new Server(httpServer)



    io.on("connection",socket=>{
        console.log(socket.id)


        socket.on("datosMaquina",(data)=>{
            console.log(data)

            io.emit("admin",data)
        })
        socket.on("run",(data)=>{
            console.log(data)

            io.emit("runner",data)
        })







    })





 }

