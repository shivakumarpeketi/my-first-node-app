const express = require('express');

const router = express.Router();

const addUserGETScript = `<form class="product-form" action="/admin/addUser" method="POST"> 
                        <div class="form-control">
                            <label for="title">Title</label>
                            <input type="text" name="userName" placeholder="User Name">
                        </div>
                        <input type="submit" value="Add User">
                    </form>`;
const adminHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add Product</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/product.css">
</head>

<body>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__item-list">
                <li class="main-header__item"><a href="/">Shop</a></li>
                <li class="main-header__item"><a class="active" href="/product/add-product">Add Product</a></li>
                <li class="main-header__item"><a href="/admin/addUser">Add User</a></li>
            </ul>
        </nav>
    </header>`;

const addUserHTMLScript = `<form action="/admin/addUser" method="POST"> 
                                <input type="text" name="userName" placeholder="User Name">
                                <input type="submit" value="Add User">
                            </form>`;

/**
 *   /admin/addUser => GET
 **/
router.get('/addUser', (req, res, next)=> {
    res.send(
        `${adminHtml} 
        <main>
            ${addUserGETScript}
        </main>
        </body>
        </html>`
)});

/**
 *   /admin/addUser => POST
 **/
router.post('/addUser', (req, res, next)=> {
    console.log(req.body);
    console.log(req.body.userName);
    res.send(
        `${adminHtml} 
        <main>
            <center><h2>User ${req.body.userName} added </center>
        </main>
        </body>
        </html>`
)});

module.exports = router;