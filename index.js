var express = require("express");

var app = express();
app.use(express.static("public")); //setup thư mục mặc định là public nên khi trong home ko cần nạp public/js
app.set("view engine","ejs");
app.set("views","./views");
app.listen(5000);

app.get("/", function(req,res){
    res.render("home");
});