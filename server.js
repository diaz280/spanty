const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Ruta para obtener respuestas
app.get('/responses', (req, res) => {
    fs.readFile(path.join(__dirname, 'responses.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error leyendo el archivo JSON');
        }
        res.send(data);
    });
});

// Ruta para guardar nuevas respuestas
app.post('/responses', (req, res) => {
    fs.readFile(path.join(__dirname, 'responses.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error leyendo el archivo JSON');
        }
        const responses = JSON.parse(data);
        const newEntry = req.body;

        // Añadir nueva respuesta
        responses[newEntry.key] = newEntry.response;

        fs.writeFile(path.join(__dirname, 'responses.json'), JSON.stringify(responses, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error escribiendo el archivo JSON');
            }
            res.send('Respuesta añadida correctamente');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
