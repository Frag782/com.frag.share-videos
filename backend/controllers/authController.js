const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.greet = (req, res) => {
    res.send('Hello from auth controller');
}

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ where: {username: username} });
    if (userExists)
        return res.status(400).json({ message: 'Le nom d\'utilisateur est déjà pris.' });

    const usedEmail = await User.findOne({ where: {email: email} });
    if (usedEmail)
        return res.status(400).json({ message: 'Cette adresse est déjà utilisée.' });

    const passwordHash = await bcrypt.hash(password, 10);

    const userCreated = await User.create({ username: username, email: email, password: passwordHash });
    if (userCreated)
        return res.status(201).json({ message: 'User was created' });
    
    return res.status(500).json({ message: 'Erreur lors de la création' });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: {email: email} });
    if (!user)
        return res.status(401).json({ message: 'Échec de la connexion.' });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
        return res.status(401).json({ message: 'Échec de la connexion.' });

    req.session.user = { id: user.id, username: user.username };
    return res.status(200).json({ message: `Connexion réussie pour l'utilisateur ${user.username}.` });
}