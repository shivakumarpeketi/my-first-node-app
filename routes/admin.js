const express = require('express');

const router = express.Router();

// /admin/addUser => GET
router.get('/addUser', (req, res, next)=> {
    console.log('I\'m in the middleware');
    res.send(`
    <form action="/admin/addUser" method="POST"> 
        <input type="text" name="userName" placeholder="User Name">
        <input type="submit" value="Add User">
    </form>`);
});

// /admin/addUser => POST
router.post('/addUser', (req, res, next)=> {
    console.log(req.body);
    console.log(req.body.userName);
    res.send('<h1> User Added');
});

module.exports = router;