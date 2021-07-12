const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const exphbs = require('express-handlebars')
const ensureAuth = require('./middleware/auth').ensureAuth
const mongoose = require('mongoose');
// const path = require('path')

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use(cookieParser())

const db_uri = require('./config/keys').MongoURI;

mongoose.connect(db_uri, { useNewUrlParser: true , useUnifiedTopology: true }, ()=>{
    console.log('DB connected successfully');
})

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs')

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public'));

    
app.get('/', ensureAuth,(req,res)=>{
    res.render('index', { text: "🚀" });
});

app.use('/kickdata', require('./routes/kick'))
app.use('/api', require('./routes/index'));
app.use('/login',require('./routes/login'))
app.get('/logout', ensureAuth, (req,res)=>{
    res.cookie('token',null,{maxAge: 0}).redirect('/login')
})


// app.listen(process.env.PORT || 5000);
app.listen(5000)