const { Router } = require('express');
const { Country, Activity } = require ('../db')
const axios = require('axios');
const { getApi } = require ('../controllers/getApi.js')
const { getDB } = require ('../controllers/getDB.js')

const getAllCountries = async () => {
  let apiInfo = await getApi();
  const dbInfo = await getDB();
  const info = apiInfo.concat(dbInfo);
  return info
}

module.exports = { getAllCountries }
