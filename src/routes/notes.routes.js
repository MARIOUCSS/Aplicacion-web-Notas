const express=require('express');
const Router=express.Router();
const {notesadd,createnote,rendernotes}=require('../controllers/notes.controllers');

Router.get('/notes/add',notesadd)
       .post('/notes/add',createnote)
       .get('/notes',rendernotes)
module.exports=Router