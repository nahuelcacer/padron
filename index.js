const express = require("express");
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "pug"); 
app.use(bodyParser.json()); //Peticiones que tengan el formato aplicattion / json
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req,res){
    res.render("index");
});
app.get("/login", function(req,res){
    
    res.render("login");
});
app.post("/users", function(req,res){ // Postea los datos en Users para verlos en consola 
    console.log("Contraseña: " + req.body.password);
    console.log("Email: " + req.body.email);
    res.send("Logueado")
});


app.listen(8080);