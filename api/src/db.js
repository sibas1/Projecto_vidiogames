require('dotenv').config();
const axios = require('axios');
const { Sequelize,Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');
const {
  DB_USER, DB_PASSWORD, DB_HOST,Akey
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame,Genero } = sequelize.models;

Videogame.belongsToMany(Genero,{
  through :"VideogameGenero"
})
Genero.belongsToMany(Videogame,{
  through :"VideogameGenero"
})
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
const popgenres = async () => { 
  const apigenres = await axios.get(`https://api.rawg.io/api/genres?key=77c9b29fc8fc48b69c2bacc6d247a38b`)
  const genres = apigenres.data.results.map(p => p.name)
  genres.forEach(p => {
    Genero.findOrCreate({
           where: {name: p}
      })
  })
}     
popgenres();


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  akey : Akey,
  Op
};
