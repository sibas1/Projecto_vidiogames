const { Router } = require('express');
const { Genero } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/", async (req, res) => {
    try {
      const genres = await Genero.findAll();
      res.json(genres);
    } catch (e) {
      res.sendStatus(404);
    }
  });
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;