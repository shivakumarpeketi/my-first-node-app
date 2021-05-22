const express = require('express');
const bodyParser = require('body-parser'); // now body-parser is coming bydefault with express no need of separate import/install body-parser

const adminRouter = require('./routes/admin');
const defaultRouter = require('./routes/default');

const server = express();

server.use(express.json()); // to parse json type data
server.use(express.urlencoded({extended:true})); // TODO find alternative to depricated body-parser

server.use(adminRouter); //order is important
server.use(defaultRouter);  //the below listner always should be last as it matches any request start with '/'

server.listen(4001, ()=> {console.log('Server Ready...!')});
