
const renderindex=(req,res,next)=>{
    res.render('index');
}
const renderabout=(req,res,next)=>{
    res.render('about');
}
module.exports={renderindex,renderabout}