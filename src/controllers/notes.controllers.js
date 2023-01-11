const notesadd=(req,res)=>{
res.send('agregar nota')

}
const createnote=(req,res)=>{
res.send('new nota')
}

const rendernotes=(req,res)=>{
res.send('render notes')
}
module.exports={notesadd,createnote,rendernotes}
