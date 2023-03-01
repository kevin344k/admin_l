const express = require('express')
const app = express();
const http=require('http')
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)
const path=require('path')
//const engine=require('consolidate')
/*
app.set('views',path.join(__dirname,'views'))
app.engine('html',engine.mustache)
*/
app.set('view engine','html')


app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
  res.render('index')
  
});
/*
app.get('/individual', (req, res) => {
  res.render('individual.html')
});
*/

server.listen(5000, () => {
  console.log('Server inciado on port 5000');
});

io.on('connection',(socket)=>{
  console.log('a user connected')
socket.emit('server:hola')

  
})
