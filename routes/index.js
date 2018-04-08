const express = require('express');
const router = express.Router();


const ctrlAdmin = require('../controllers/admin');
const ctrlWork = require('../controllers/work');
const ctrlBlog = require('../controllers/blog');


const ctrlAbout = require('../controllers/about');
const ctrlLogin = require('../controllers/login');

/*
router.get('/about', ctrlHome.index);
router.post('/mail', ctrlHome.sendEmail);


*/
router.get('/', ctrlLogin.login);
//router.post('/login', ctrlLogin.auth);
router.get('/about', ctrlAbout.about);
router.get('/blog', ctrlBlog.blog);
router.get('/admin', ctrlAdmin.admin);
router.get('/my-works', ctrlWork.work);
module.exports = router;