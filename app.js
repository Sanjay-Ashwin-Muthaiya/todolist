const express = require("express");
const bodyParser = require("body-parser");

var items=["Tell me Sanjay Ashwin Muthaiya..! Whats your goal today"];
const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var today = new Date();
  var options={
    weekday: "long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindofday:day, newlistitems:items});
});

app.post("/",function(req,res){
  var item=req.body.newitem;
  items.push(item);
  res.redirect("/");
});
app.listen(3000,function(){
  console.log("Server started at 3000");
})
