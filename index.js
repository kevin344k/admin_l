const express = require('express')
const app = express();
const http=require('http')
const server=http.createServer(app)
const {Server}=require('socket.io')
const path=require('path')
const PORT=process.env.PORT || 5000



const io=new Server(server)

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
  res.render('index.html')
  
});
/*
app.get('/individual', (req, res) => {
  res.render('individual.html')
});
*/

server.listen(PORT, () => {
  console.log(`Server inciado on port ${PORT} ` );
});

io.on('connection',(socket)=>{
  console.log('a user connected')
socket.emit('server:hola')

  
})
