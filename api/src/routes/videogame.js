const { Router } = require('express');
const { Videogame } = require('../db');
const axios = require('axios');
const { akey } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
            var vTapi = []
            let d = "https://api.rawg.io/api/games?key=77c9b29fc8fc48b69c2bacc6d247a38b"
            while (vTapi.length < 5) {
                const result = await axios.get(d)
                vTapi.push(result.data.results)
                d = result.data.next
            }

            var final = []
            for (let index = 0; index < vTapi.length; index++) {
                final = final.concat(vTapi[index]);
            }

            var gg = final.map(p => {
                let ge = []
                for (i = 0; i < p.genres.length; i++) {
                    ge.push(p.genres[i].name)
                }
                let pat = []
                for (i = 0; i < p.platforms.length; i++) {
                    pat.push(p.platforms[i].platform.name)
                }
                return {
                    id: p.id,
                    name: p.name,
                    image: p.background_image,
                    genres: ge.toString(),
                    platforms: pat.toString(),
                    rating: p.rating,
                    origin: 'API'
                }
            })
        var dbvgames = []
        dbvgames = await Videogame.findAll()
        var dbvgame = dbvgames.map(p => {
            return {
               id: p.id,
               name: p.name,
               image: "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
               genres: "aaa",
               rating: p.rating,
               origin: 'DB'
            }
        }) 
        
        const allvgames = dbvgame.concat(gg) 
         if(name){
            allvgamesf = allvgames.filter(p => p.name.toLowerCase().includes(name.toLowerCase())) 
            res.json(allvgamesf)
        }else  res.json(allvgames)
   
})

router.post('/', async (req, res) => {
    let { name, description, reldate, rating, platform, genre } = req.body;
    try {
        platform = platform.toString();
        await Videogame.create({
            name,
            description,
            reldate,
            rating,
            platform,
            genre
        })
        res.send("creado")
    } catch (error) {

    }

});


module.exports = router;