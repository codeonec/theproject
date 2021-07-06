const express = require('express');
const cors = require('cors');
const app = express();
const exphbs = require('express-handlebars')
const ensureAuth = require('./middleware/auth').ensureAuth
const mongoose = require('mongoose');
// const path = require('path')

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const db_uri = require('./config/keys').MongoURI;
const router = require('./routes/index');

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


// app.listen(process.env.PORT || 5000);
app.listen(5000)