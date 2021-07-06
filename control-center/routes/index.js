const express = require('express');
const router = express.Router();
const Kick = require('../models/kick')
const testData = require("./database.json");


router.get('/getdata/:load/:limit', async (req,res)=>{

    const load = parseInt(req.params.load);
    const limit = parseInt(req.params.limit);

    const startIndex = (load - 1) * limit;
    const endIndex = load * limit;

    const resultData = {}

    let docLength 

    if(req.query.prefs){
        docLength = await Kick.countDocuments({topic: {$in: req.query.prefs}})
    }else{
        docLength = await Kick.countDocuments()
    }

    if(endIndex < docLength){
        resultData.next = {
            load: load + 1,
            limit: limit
        }
    }

    if(startIndex > 0){
        resultData.previous = {
            load: load - 1,
            limit: limit
        }
    }    

    try{
        if(req.query.prefs){
            resultData.data = await Kick.find({topic: {$in: req.query.prefs}}).sort({ time: -1 }).skip(startIndex).limit(limit)
            res.send(resultData)
        }else{
            resultData.data = await Kick.find().sort({ time: -1 }).skip(startIndex).limit(limit)
            res.send(resultData)
        }        
    }catch(e){
       res.status(400).send(e)
    }

});


// router.post('/pref', async (req,res)=>{
//     try{
//         if(!req.query.prefs){res.status(400).send("Invalid Query")}
//         const data = await Kick.find({topic: {$in: req.query.prefs}})
//         res.send(data) 
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

module.exports = router;