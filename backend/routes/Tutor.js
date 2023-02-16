const express = require('express');
const Router=express.Router();
const {getTutorLogin,getTutorSignup,DisplayTutor,EditTutor,getAdmin,deletetutor}=require('../Controller/Tutor_controller');




Router
.get('/display',DisplayTutor)
.post('/Login',getTutorLogin)
.post('/Admin',getAdmin)
.post('/Singup',getTutorSignup)
.put('/EditTutor',EditTutor)
.delete('/delete',deletetutor)
module.exports= Router;