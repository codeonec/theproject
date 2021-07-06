const express = require('express')
const router = express.Router();
const Kick = require('../models/kick')
const ensureAuth = require('../middleware/auth').apiAuth

router.get('/', (req,res) => {
    res.render('kick')
})

router.post('/', ensureAuth,async (req,res)=>{
    const kick = new Kick({
        category: req.body.category,
        text: req.body.text,
        topic: req.body.topic,
        tool: req.body.tool,
        image: req.body.image,
        linkSource: req.body.linkSource
    })
    try{
        const savedKick = await kick.save()
        res.send(savedKick)
    }catch(e){
        res.status(400).send(e)
    } 
    // console.log(req.body)
    // res.send('hello')
})


module.exports = router