const { Router } = require('express');
const { Country, Activity } = require ('../db')
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const getApi = async () => {
  const apiUrl = await axios.get('https://restcountries.com/v3/all');
  const apiInfo = await apiUrl.data.map(e => {
    return {
      name: e.name,
      cca3: e.cca3,
      flag: e.flags,
      continent: e.continents,
      capital: e.capital,
      subregion: e.subregion,
      area: e.area,
      population: e.population,
      activities: e.activities,
    }
  });
  return apiInfo
}

const getDB = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }
  })
}

const getAllCountries = async () => {
  let apiInfo = await getApi();
  const dbInfo = await getDB();
  const info = apiInfo.concat(dbInfo);
  return info
}


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
      return res.status(201).send(activity)
    }
  catch (error) {
      console.error(error);
      res.status(500).send('Ha ocurrido un error.');
    }
});

router.get('/activities ', async (req, res) => {
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
