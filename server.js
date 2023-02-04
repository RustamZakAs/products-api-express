const express = require('express');
const app = express();
const port = 8081;

const products = [
    { id: 1, code: "123456", name:"apple", descriprion: "quba apple", price: 3.00 },
    { id: 2, code: "123457", name:"sinab apple", descriprion: "quba apple", price: 2.50 },
    { id: 3, code: "123458", name:"sinab apple endirimli", descriprion: "quba apple", price: 1.00 },
    { id: 4, code: "123459", name:"karalyok", descriprion: "quba", price: 2.01 },
    { id: 5, code: "123460", name:"pomeqranat", descriprion: "afrika", price: 3.00 },
    { id: 6, code: "123461", name:"qranat", descriprion: "gokcay", price: 2.30 },
    { id: 7, code: "123462", name:"qranat sok 1 lt", descriprion: "gokcay", price: 3.00 },
    { id: 8, code: "123463", name:"dish copu", descriprion: "madaqaskar", price: 3.00 },
    { id: 9, code: "123464", name:"dish copu II", descriprion: "madaqaskar", price: 2.00 },
    { id: 10, code: "123465", name:"dish copu III", descriprion: "madaqaskar", price: 1.00 },
    { id: 11, code: "123466", name:"dish copu IV", descriprion: "madaqaskar", price: 0.99 },
]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
    const id = req.query.id;
    if (id && id > 0) {
        res.send(products.find(x => x.id == id));
    }
    const code = req.query.code;
    if (code) {
        res.send(products.find(x => x.code == code));
    }
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    if (count >= 0 && offset >= 0) {
        res.send(products.slice(offset * count, (offset * count) + count));
    }   
    //res.send([...products].slice(count * offset, count));

    res.send(products);
});

app.get('/products/:code', (req, res) => {
    const code = req.params.code;
    res.send(products.find(x => x.code === code));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});