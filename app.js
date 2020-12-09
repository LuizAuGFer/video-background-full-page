const express=require('express');
const bodyParser=require('body-parser');
const handlebars=require ('express-handlebars');
const app=express();
const urlencodeParser = bodyParser.urlencoded({extended: false});
//Start server
app.listen(3000, function(req, res){
    console.log('Server is online!');
});

//Template Engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use( express.static( "public" ) );
//May routes
app.get('/', function(req, res){
    res.render('index');
})