const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const siteContent = require('./data/siteContent');
require('dotenv').config();

// Ruta para mostrar la página de contacto
app.get('/contact', (req, res) => {
    res.render('contact', {
        contact: {
            heading: 'Contáctanos',
            description: 'Estamos aquí para ayudarte.',
            phone: '+59812345678',
            social: {
                facebook: 'https://facebook.com/professional-cleaning',
                instagram: 'https://instagram.com/professional-cleaning'
            }
        }
    });
});



// Serve static files like images and styles
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
    res.render('index', siteContent); // Pasa el contenido al template
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
