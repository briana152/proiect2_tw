var express = require("express");
var router = express.Router();
let mangas = [{
            suggestionName: "Blue Period",
            suggestionVolume: "vol.1",
            suggestionGenre: "slice-of-life"
        },
        {
            suggestionName: "Jujutsu Kaisen",
            suggestionVolume: "vol.4",
            suggestionGenre: "action"
        },
        {
            suggestionName: "BungoStrayDogs",
            suggestionVolume: "vol.22",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Chainsaw Man",
            suggestionVolume: "vol.1",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Jujutsu Kaisen",
            suggestionVolume: "vol.11",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Jujutsu Kaisen",
            suggestionVolume: "vol.1",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Chainsaw Man",
            suggestionVolume: "vol.1",
            suggestionGenre: "action"
        },
        {
            suggestionName: "The Case Study of Vanitas",
            suggestionVolume: "vol.4",
            suggestionGenre: "fantasy"
        },
        {
            suggestionName: "Tokyo Revengers",
            suggestionVolume: "vol.24",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Tokyo Revengers",
            suggestionVolume: "vol.1",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Tokyo Revengers",
            suggestionVolume: "vol.1",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Demon Slayer",
            suggestionVolume: "vol.20",
            suggestionGenre: "action"
        },
        {
            suggestionName: "Demon Slayer",
            suggestionVolume: "vol.7",
            suggestionGenre: "action"
        }
        ]

router.get("/", function(req,res){
    res.render("../home/index");
});

router.get("/products", function(req,res){
    res.render("../home/products");
});




router.get("/suggestions", function(req,res){
    res.render("../home/suggestions");
});

router.get("/create", function(req,res){
    res.render("../home/create");
});

router.get("/delete", function(req,res){
    res.render("../home/delete");
});

router.get("/update", function(req,res){
    res.render("../home/update");
});

router.get("/mangas/action", function(req,res){
    let tempOb = [];
    for(i=0; i<mangas.length;i++){
        if(mangas[i].suggestionGenre == "action"){
            tempOb.push(mangas[i]);
        }
    }
    res.send(tempOb);
});

router.get("/mangas/romance", function(req,res){
    let tempOb = [];
    for(i=0; i<mangas.length;i++){
        if(mangas[i].suggestionGenre == "romance"){
            tempOb.push(mangas[i]);
        }
    }
    res.send(tempOb);
});

router.get("/mangas/slice-of-life", function(req,res){
    let tempOb = [];
    for(i=0; i<mangas.length;i++){
        if(mangas[i].suggestionGenre == "slice-of-life"){
            tempOb.push(mangas[i]);
        }
    }
    res.send(tempOb);
});

router.get("/mangas/fantasy", function(req,res){
    let tempOb = [];
    for(i=0; i<mangas.length;i++){
        if(mangas[i].suggestionGenre == "fantasy"){
            tempOb.push(mangas[i]);
        }
    }
    res.send(tempOb);
});

router.get("/mangas", function(req,res){
    res.send(JSON.stringify(mangas));
});

router.post("/create", function(req,res){
    let variabila = req.body;
    mangas.push(variabila);
    res.render("../home/create");
});

router.patch("/update", function(req,res){
    let variabila = req.body;
    let {indexUpdate,newManga} = variabila;
    if(indexUpdate>=13 && indexUpdate<mangas.length){
        mangas[indexUpdate] = newManga;
    }
    res.render("../home/update");
});

router.delete("/delete", function(req,res){
    let variabila = req.body;
    let {indexDelete} = variabila;
    console.log(indexDelete);
    if(indexDelete>=0 && indexDelete<mangas.length){
        mangas.splice(indexDelete);
    }
    res.render("../home/delete");
});

router.get('*',function(req,res){
    res.render("../home/notfound");
});


module.exports = router;