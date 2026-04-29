const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
const projectRoutes = require('./routes/project.routes');

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();

// Middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger simple
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/projects', projectRoutes);

// Route par défaut
app.get('/', (req, res) => {
  res.json({ message: 'API Portfolio — Express JS + MongoDB' });
});

// Middleware 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});