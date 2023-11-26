import createError from'http-errors'
import express from'express'
import mongoose from 'mongoose'
import path from'path'
import cookieParser from'cookie-parser'
import logger from'morgan'
import indexRouter from './routes/index.js'
// const usersRouter = require('./routes/UserRoute');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  const options= ''
  mongoose.connect('mongodb://127.0.0.1:27017/myapp', options).then(
    () => { console.log('mongodb connected')},
    err => { log('mongodb connection error') }
  );


app.use('/api/v1', indexRouter);
// app.use('api/v1/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   // next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;
