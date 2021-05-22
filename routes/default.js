const express = require('express');

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res, next)=> {  
    console.log('I\'m in the middleware');
    res.send('<h1> Welcoe to EXPRESS JS...!');
});

module.exports= defaultRouter;