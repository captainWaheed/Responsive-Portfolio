const express =require('express');

const router = express();

router.use("/CSS/style.css", express.static(__dirname + "/CSS/style.css"));
router.use("/img", express.static(__dirname + "/img"));


router.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

router.listen(process.env.PORT || 5000,function(){
    console.log("We are live");
})