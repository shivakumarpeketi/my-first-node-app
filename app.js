const express = require('express');
const bodyParser = require('body-parser'); // now body-parser is coming bydefault with express no need of separate import/install body-parser

const server = express();

server.use(express.json()); // to parse json type data
server.use(express.urlencoded({extended:true})); // TODO find alternative to depricated body-parser

server.use('/addUsers', (req, res, next)=> {
    console.log('I\'m in the middleware');
    res.send(`<form action=\'/addUser\' method=\'POST\'> 
    <input type=\'text\' name=\'userName\'>
    <input type=\'submit\' value=\'Add User\'></form>`);
});

server.post('/addUser', (req, res, next)=> {
    console.log(req.body);
    console.log(req.body.name);
    res.send('<h1> User Added');
});

server.use('/', (req, res, next)=> {
    console.log('I\'m in the middleware');
    res.send('<h1> Welcoe to EXPRESS JS...!');
});

server.use('/users', (req, res, next)=> {
    console.log('Users List Handler');
    let usersList = `<Center>
    <ul>
      <li> User11 </li>
      <li> User22 </li>
      <li> User33 </li>
    </ul>
  </Center>`;
    res.send(usersList);
});

server.listen(4001, ()=> {console.log('Server Ready...!')});
