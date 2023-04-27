const express = require('express')
const {createServer}=require('http')
const realTimeServer=require("./realTimeServer.js")
const path=require('path')
const mongoose=require("mongoose")

const app = express();

const httpServer=createServer(app)


//settingd
app.set("port",process.env.PORT || 8000)
app.set("views",path.join(__dirname,"views"))
//connect to db
mongoose
  .connect('mongodb+srv://kevin344k:kevin344k@cluster0.gaw6qqs.mongodb.net/?retryWrites=true&w=majority')
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));


app.use(express.static(path.join(__dirname,'public')))
// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//routes

app.use(require("./routes"))


httpServer.listen(app.get("port"), () => {
  console.log(`Server inciado on port ${app.get("port")} ` );
});


realTimeServer(httpServer)