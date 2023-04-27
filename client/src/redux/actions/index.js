import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const SORT_UP = 'SORT_UP';
export const SORT_DOWN = 'SORT_DOWN';
export const SORT_MORE = 'SORT_MORE';
export const SORT_LESS = 'SORT_LESS';
export const BY_CONTINENT = 'BY_CONTINENT';
export const BY_ACTIVITY = 'BY_ACTIVITY';

export function getCountries() {
  return async function(dispatch) {
    await axios('http://localhost:3001/countries')
    .then((response) => response.json())
    .then((data) => dispatch({  type: 'GET_COUNTRIES',
      payloads: data}));
  }
};

export function getCountriesByName(name) {
  return {type: GET_COUNTRIES_BY_NAME,
      payload: name};
};

export function getCountriesById(id) {
  return async function(dispatch) {
    await axios(`http://localhost:3001/countries/${id}`)
    .then((data) => dispatch({type: GET_COUNTRIES_BY_ID,
      payload: data.data}));
  }
};

export function sortUp() {
  return {type: SORT_UP};
};

export function sortDown() {
  return {type: SORT_DOWN};
};

export function sortMore() {
  return {type: SORT_MORE};
};

export function sortLess() {
  return {type: SORT_LESS};
};

export function byContinent(continent) {
  return {type: BY_CONTINENT,
      payload: continent};
  }

  export function byActivity(activity) {
    return {type: BY_ACTIVITY,
        payload: activity};
    }
