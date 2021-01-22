const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    res.render('home', {
        title: 'Home'
    })
})

router.get('/home',(req,res) => {
    res.render('home', {
        title: 'Home'
    })
})

router.get('/portfolio',(req,res) => {
    res.render('portfolio', {
        title: 'Portfolio',
        layout: 'portfolio',
    })
})

router.get('/about',(req,res) => {
    res.render('about', {
        title: 'Home'
    })
})

router.get('/contact',(req,res) => {
    res.render('contact', {
        title: 'Home'
    })
})

module.exports = router