const express = require('express');
const path = require('path');

const bodyParser = require('body-parser'); // now body-parser is coming bydefault with express no need of separate import/install body-parser

const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const shopRouter = require('./routes/shop');
const defaultRouter = require('./routes/default');

const server = express();

server.use(express.json()); // to parse json type data
server.use(express.urlencoded({extended:true})); // TODO find alternative to depricated body-parser

server.use(express.static(path.join(__dirname, 'public')));
server.use('/admin', adminRouter); //order is important
server.use('/product', productRouter)
server.use(shopRouter);  //this listner always should be last as its request path matches with any request start with '/'

server.use((req,ress, next) => {
  ress.status(404).send('<h1> Page Not Found</h2>');
});

server.listen(4001, ()=> {console.log('Server Ready...!')});
