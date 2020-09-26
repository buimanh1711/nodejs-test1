const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3001;

app.use(morgan('combined'));
//template engine   
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'assets/views'));

app.get('/', (req, res) => {
    return res.send('home');
});

app.listen(port, () => {
    console.log(`app is listening port ${port}`);
});