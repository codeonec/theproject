const tokenSecret = require('../config/keys').TokenSecret
const jwt = require('jsonwebtoken');

const auth = true

exports.ensureAuth = (req, res, next) => {
    const signatureToken = req.cookies.token
    if(!signatureToken) {
        console.log('req.cookies.token')
        res.redirect('/login')
    }
    try{
        const verified = jwt.verify(signatureToken, tokenSecret);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).redirect('/login');
    }   
}

exports.apiAuth = (req, res, next) => {
    const signatureToken = req.cookies.token
    if(!signatureToken) {
        console.log('req.cookies.token')
        res.status('401').send('No Auth')
    }
    try{
        const verified = jwt.verify(signatureToken, tokenSecret);
        req.user = verified;
        next()
    }catch(err){
        res.status('401').send({error: "Invalid Signature Token"})
    }   
}

exports.loginRouteAuth = (req,res,next) => {
    const signatureToken = req.cookies.token
    try{
        const verified = jwt.verify(signatureToken, tokenSecret);
        req.user = verified;
        res.redirect('/')
    }catch(err){
        next();
    }   
}