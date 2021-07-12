const express = require('express')
const router = express.Router();
const LoginAuth = require('../middleware/auth').loginRouteAuth
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const encKey = require('../config/keys').ControlCenterPass
const tokenSecret = require('../config/keys').TokenSecret


router.get('/', LoginAuth, (req,res) => {
    res.render('auth')
})

router.post('/',async (req,res)=>{

    const validPass = await bcrypt.compare(req.body.password,encKey)

    if(!validPass) res.render('auth',{error: 'Invalid Authorization'})

    const ValidationToken = jwt.sign({uid: '001',user: true, valid: 31536000, cookie: 'hhtpOnly'},tokenSecret)
    res.cookie('token',ValidationToken,{httpOnly:true, maxAge: 31536000}).redirect('/')
})

module.exports = router