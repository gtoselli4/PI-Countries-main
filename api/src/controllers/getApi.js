const { Router } = require('express');
const { Country, Activity } = require ('../db')
const axios = require('axios');

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


module.exports = { getApi }
