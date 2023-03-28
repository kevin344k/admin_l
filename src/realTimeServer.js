 module.exports=httpServer=>{
     const {Server}=require('socket.io')
     const io=new Server(httpServer)



    io.on("connection",socket=>{
        console.log(socket.id)


        socket.on("datosMaquina",(data)=>{
            console.log(data)

            io.emit("admin",data)
        })
        //RUN
        socket.on("run",(data)=>{
            console.log(data)

            io.volatile.emit("runner",data)
        })
        //STOPPED
        socket.on("stop",(data)=>{
            console.log(data)

            io.volatile.emit("stopped",data)
        })
        //CHANGE
        socket.on("change",(data)=>{
            console.log(data)

            io.volatile.emit("changes",data)
        })






    })





 }

