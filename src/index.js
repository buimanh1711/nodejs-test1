const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes/index.route');
const db = require('./config/db/index');

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//template engine   
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'assets/views'));

//route initialize
route(app);

app.listen(port, () => {
    console.log(`app is listening port ${port}`);
});