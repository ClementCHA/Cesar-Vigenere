const dotenv = require('dotenv'); 

dotenv.config(); 

const PORT = process.env.PORT || 5000;

const express = require ('express')

const app = express()

app.set('view engine', 'ejs');
app.set('views','app/views');

app.use(express.static('public'));

app.use(express.urlencoded({extend : true}));

const session = require('express-session');
app.use(session({
    secret: 'rgeerppregok', // clé de hashage
    resave: true, // sujet un peu avancé => cf la doc.
    saveUninitialized: true, // sujet un peu avancé  => cf la doc.
   
})); 


const router = require('./app/router')
app.use(router);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
});

