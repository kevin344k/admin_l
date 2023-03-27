const express = require('express')
const {createServer}=require('http')
const realTimeServer=require("./realTimeServer.js")
const path=require('path')

const app = express();

const httpServer=createServer(app)

app.set("port",process.env.PORT || 5000)
app.set("views",path.join(__dirname,"views"))


app.use(express.static(path.join(__dirname,'public')))

//routes

app.use(require("./routes"))


httpServer.listen(app.get("port"), () => {
  console.log(`Server inciado on port ${app.get("port")} ` );
});


realTimeServer(httpServer)