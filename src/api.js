const express = require('express');
const loginRoute = require('./routes/LoginRoute');
const userRoute = require('./routes/UserRoute');
const categoryRoute = require('./routes/CategoryRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

// ...Iniciando Projeto

const app = express();

app.use(express.json());

// ...

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
