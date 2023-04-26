const { Router } = require('express');
const { Country, Activity } = require ('../db')
const axios = require('axios');

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

module.exports = { getDB }
