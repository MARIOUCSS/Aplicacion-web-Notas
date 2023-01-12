const express=require('express');
const Router=express.Router();
const {DeleteNote,
       updateNote,
       rendereditform,
       notesadd,
       createnote,
       rendernotes}=require('../controllers/notes.controllers');

       
Router.get('/notes/add',notesadd)
       .post('/notes/new-note',createnote)
       .get('/notes',rendernotes)
       //la nota (id)que quiero actualizar
       .get('/notes/edit/:id',rendereditform)
       .put('/notes/edit/:id',updateNote)
       .delete('/notes/delete/:id',DeleteNote)
module.exports=Router