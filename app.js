const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) =>{
//     res.redirect('/');
// });

app.get('/', (req, res, next) => {
  res.render('main');
});
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3001);