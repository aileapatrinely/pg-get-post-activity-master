const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
const booksRouter = require('./routers/books.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('api/books', booksRouter);

app.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});
