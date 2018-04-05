const express = require('express');
const app     = express();


/* app.get('/', (req, res) => {
    res.end('works!');
}); */
app.use(express.static('public'))//le digo que use los archivos estaticos de mi carpeta public

app.listen(3000, () => {
    console.log('servidor iniciado.');
});