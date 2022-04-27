var express=require('express')
var router=express.Router();

router.get("/",(req,res)=>{

    console.log(req.oidc.isAuthenticated());

    res.render("index",{title:"Express Demo",
    isAuthenticated:req.oidc.isAuthenticated(),
    user:req.oidc.user
});     //whatever the object we are creating over here it will called in the index.ejs file as the dynamice value
})

module.exports=router;