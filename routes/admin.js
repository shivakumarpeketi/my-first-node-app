const express = require('express');

const router = express.Router();

router.get('/addUser', (req, res, next)=> {
    console.log('I\'m in the middleware');
    res.send(`
    <form action=\'/addUser\' method=\'POST\'> 
        <input type=\'text\' name=\'userName\' placeholder=\'User Name\'>
        <input type=\'submit\' value=\'Add User\'>
    </form>`);
});

router.post('/addUser', (req, res, next)=> {
    console.log(req.body);
    console.log(req.body.userName);
    res.send('<h1> User Added');
});

module.exports = router;