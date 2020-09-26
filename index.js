const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('hello world!');
});
app.get('/trang-chu', (req, res) => {
    return res.send('trang chu');
})

app.listen(port, () => {
    console.log(`app is listening port ${port}`);
});