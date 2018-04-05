const express = require('express');

//App bajo el Framework de Node que es Express
const app = express();

//En esa dirección la función recibirá peticiones y respuestas
//para una web api
/* app.get('/', (req, res) => {
    res.end('works!');
}); */

//Para usarlo como sitio web
//Usa los archivos estáticos en el carpeta publics
app.use(express.static('public'));

//Abrir en localhost:3000
app.listen(3000, () => {
    console.log('Servidor iniciado.')
});