const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
const booksRouter = require('./routers/books.router.js');
const magazinesRouter = require('./routers/magazines.router.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/books', booksRouter);
app.use('api/magazines', magazinesRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});
