const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
//Initializations
const app=express();
//settings
//nombre variable y puerto
app.set('port',process.env.port||4000);
//dirname otorg ala ruta entera ojo
app.set('views',path.join(__dirname,'views'));
//configuracion hbs

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  });
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
//midlewares
app.use(express.urlencoded({extended:false}));
//Global variables
//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
//static files
app.use(express.static(path.join((__dirname),'public')))
//routes



module.exports=app;