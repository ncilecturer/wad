var express = require("express"); //call the express module which is default provided by Node
var app = express(); //now we need to declare our app which is invoked

app.get('/',function(req,res) {
    res.send("hello World"); 
    console.log("this should go to console...")
});

app.listen(process.env.PORT||3000,process.env.IP||"0.0.0.0", function(){
 console.log("Yippee its runing");   
});
