const notesadd=(req,res)=>{
res.render('notes/new-note');

}
const createnote=(req,res)=>{
    console.log(req.body)
res.send('new nota')
}

const rendernotes=(req,res)=>{
res.send('render notes')
}

const rendereditform=(req,res,next)=>{
res.send('render edit form')
}

const updateNote=(req,res,next)=>{
res.send('update note')
}
const DeleteNote=(req,res,next)=>{
    res.send('delete note')
    }
module.exports={DeleteNote,updateNote,rendereditform,notesadd,createnote,rendernotes}