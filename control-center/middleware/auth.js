
const auth = true

exports.ensureAuth = (req, res, next) => {
    if(!auth) {
        res.redirect('/login')
    }else{
        return next();
    }
}

exports.apiAuth = (req, res, next) => {
    if(!auth) {
        res.status('401').send({error: "Login to continue"})
    }else{
        return next();
    }
}