const express = require('express');

//App bajo el Framework de Node que es Express
const app = express();

//En esa dirección la función recibirá peticiones y respuestas
app.get('/', (req, res) => {
    res.end('works!');
});

//Abrir en localhost:3000
app.listen(3000);