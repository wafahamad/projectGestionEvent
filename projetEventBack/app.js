//app.js
const express = require('express');
const app = express();

const connectDB = require('./config/data'); // Importez le fichier de connexion
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");

app.use(express.json());
app.use(cors());

connectDB();
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
// Définissez vos routes
const evenementsRouter = require('./routes/evenements');
const participantsRouter = require('./routes/participants');
const RouterParticipations = require("./routes/participations");
const authRouter = require("./routes/authRoute");
const organisationRouter = require("./routes/organisations");
app.use('/evenements', evenementsRouter);
app.use('/auth',authRouter);
app.use('/participants', participantsRouter);
app.use('/participations', RouterParticipations);
app.use('/organisations',organisationRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
// Démarrez le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});