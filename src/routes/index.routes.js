const express=require('express');
const Router=express.Router();
const {renderindex,renderabout}=require('../controllers/index.controllers')
Router.get('/',renderindex)
.get('/about',renderabout)

module.exports=Router