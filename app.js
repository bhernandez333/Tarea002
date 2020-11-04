const app = require('express')();
const port = 3000;

app.use('/suma', require('./routes/suma_routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// app.js (inicializar) -> routes -> services -> infraestructure