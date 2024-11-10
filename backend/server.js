const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const sequelize = require('./config/database');

// Chargement du fichier .env
dotenv.config();

// Middlewares
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


// Démarrage du serveur
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Serveur à l'écoute sur le port ${process.env.SERVER_PORT}`);
});

// Connexion à la base de données
try {
    sequelize.authenticate();
    console.log('Connecté à la base de données.');
} catch (error) {
    console.error('Échec de la connexion à la base de données.');
}