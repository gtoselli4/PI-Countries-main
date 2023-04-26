const { Router } = require('express');
const { Country, Activity } = require ('../db')
const { getAllCountries } = require ('../controllers/getAllCountries.js')
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res) => {
  const name = req.query.name;
  let countries = await getAllCountries();
  if (name) {
    let countryName = await countries.filter(e => e.name.common.toLowerCase().includes(name.toLowerCase()));
    if (countryName.length === 0) {
        res.status(404).send('País no encontrado via nombre.')
      } else {
        res.status(200).send(countryName)
      }
  }
  else {
      res.status(200).send(countries)
  }
});


router.get('/countries/:idPais', async (req, res) => {
  const id = req.params.idPais
  let countries = await getAllCountries();
  let countryByID = countries.filter(e => e.cca3.toLowerCase().includes(id.toLowerCase()));
  if (countryByID.length > 0) {
    res.status(200).send(countryByID);
  } else {
    res.status(404).send('País no encontrado via ID.');
  }
});


router.post('/activities', async (req, res) => {
  const { name, difficulty, duration, season, nameCountry } = req.body;
  try {
      const country = await Country.findOne({ where: { name: { common: nameCountry }}});
      if (!country) {
        return res.status(404).send('País no encontrado.');
      }

      const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });

      await country.addActivity(activity);
      return res.status(201).send('Actividad creada con exito.')
    }
  catch (error) {
      console.error(error);
      res.status(500).send('Ha ocurrido un error.');
    }
});

router.get('/activities', async (req, res) => {
  Activity.findAll({
    include: {
      model: Country
    }
  })
  .then(activities => {
    res.json(activities);
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener actividades.' });
  });
});

module.exports = router;
