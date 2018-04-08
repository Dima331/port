const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log('server is running on port: 3000');
});
/*
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get(['/', '/:pageName'], (req, res) => {
  let pageName = req.params.pageName;
  if (!pageName) pageName = 'index';

  res.render(`pages/${pageName}.pug`, (err, html) => {
    if (err) {
      if (err.message.indexOf('Failed to lookup view') !== -1) {
        return res.send('Страница не найдена');
      }
      throw err;
    }
    res.send(html);
  });
});

app.listen(3000, () => {
  console.log('server is running on port: 3000');
});*/