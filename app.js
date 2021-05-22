const express = require('express');

const server = express();

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
