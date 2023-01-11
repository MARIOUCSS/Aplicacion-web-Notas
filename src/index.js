const app=require('./server');
//Initializations
app.listen(app.get('port'),()=>{
    console.log('server',app.get('port'));
})
//settings

//Middlewares
