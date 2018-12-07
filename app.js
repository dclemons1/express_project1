const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
app.set('view engine', 'pug')

app.get('/youtube',(req,res)=>{
    res.render('youtube',{
        title: 'Youtube',
        heading: "Google API's",
        key: process.env.KEY,
        greeting: process.env.TEST

    })
    app.use(express.static(path.join(__dirname,'/scripts')));
    app.use(express.static(path.join(__dirname,'/style')));
});
app.get('/map',(req,res)=>{
    res.render('map', {
        title: 'map',
        heading: "Google API's",
        key: process.env.KEY
    })
    app.use(express.static(path.join(__dirname,'/scripts')));
    app.use(express.static(path.join(__dirname,'/style')));
})
app.get('/shortener',(req,res)=>{
    res.render('shortener', {
        title: 'shortener',
        heading: "Google API's",
        key: process.env.KEY
    })
    app.use(express.static(path.join(__dirname,'/scripts')));
    app.use(express.static(path.join(__dirname,'/style')));
})


app.listen(3000)