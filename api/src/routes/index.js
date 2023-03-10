const { Router } = require('express');
const generoRouter =require('./genero')
const videogamesRouter =require('./videogame')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/videogame',videogamesRouter)
router.use('/genero',generoRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
