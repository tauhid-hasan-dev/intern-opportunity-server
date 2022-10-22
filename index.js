const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
const countries = require('./data/countries.json');

app.get('/countries', (req, res) => {
    res.send(countries)
});

app.get('/countries/:id', (req, res) => {
    const id = req.params.id;
    const country = countries.find(ct => ct.id === id);
    res.send(country)
})


app.get('/', (req, res) => {
    res.send('Server is running very nice');
})

app.listen(port, () => {
    console.log(`Server is running on port${port}`)
})