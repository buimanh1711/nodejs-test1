const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'));
//template engine   
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'assets/views'));

app.get('/', (req, res) => {
    return res.render('home');
});
app.get('/route_1', (req, res) => {
    return res.render('route_1');
})

app.listen(port, () => {
    console.log(`app is listening port ${port}`);
});