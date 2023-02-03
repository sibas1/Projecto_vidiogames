const { Router } = require('express');
const axios = require('axios');
const {YOUR_API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

/*router.get('/',async (req ,res )=>{
    const {name} = req.query;
    try {
        if(name){
        let nn = name.split(' ').join('-').toLowerCase()
           var result = await axios.get(`https://api.rawg.io/api/games?search=${sname}&key=77c9b29fc8fc48b69c2bacc6d247a38b`)
           result = result.data.results
           res.json(result)
    }
    else{
         var vTapi=[]
         let d = "https://api.rawg.io/api/games?key=77c9b29fc8fc48b69c2bacc6d247a38b"
         while (vTapi.length<5) {
         const result = await axios.get(d)
         vTapi.push(result.data.results) 
         d=result.data.next
       } 
       
        var final =[]
        for (let index = 0; index < vTapi.length; index++) {
            final=final.concat(vTapi[index]);
        } 

        var gg = final.map(p => {
            let ge=[]
            for (i=0;i<p.genres.length;i++) {
                ge.push(p.genres[i].name)
           }
           let pat=[]
           for (i=0;i<p.platforms.length;i++) {
            pat.push(p.platforms[i].platform.name)
       }
           return {
              id:p.id,
              name: p.name,
              image: p.background_image,
              genres: ge.toString(),
              platforms: pat.toString(),
              rating: p.rating,
              origin: 'API'
            }
         })  
        console.log(gg)
        res.json(final) 
    }
   
    } catch (error) {
        res.json(error)
    }
    
    

          
})*/

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    var idkey = parseInt(id)
    const ss = await axios.get(`https://api.rawg.io/api/games/${idkey}?key=77c9b29fc8fc48b69c2bacc6d247a38b`)
    console.log(req.params)
    res.json(req.params)
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;