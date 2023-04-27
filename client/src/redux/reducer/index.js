import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID, SORT_UP, SORT_DOWN, SORT_MORE, SORT_LESS, BY_CONTINENT, BY_ACTIVITY } from '../actions/index.js';

const initialState = {
  countries: [],
  detail: [],
  copy: []
}

function rootReducer(state= initialState, action){
  switch(action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload}

    case GET_COUNTRIES_BY_NAME:
      const name = action.payload;
      const filteredCountriesbyName = state.copy.filter(country => country.name.toLowerCase().includes(name));
      return {
        ...state,
        countries: filteredCountriesbyName
      };

    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        detail: action.payload}

    case SORT_UP:
      let aToZ = state.countries.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
      return {
        ...state,
        countries: aToZ}

    case SORT_DOWN:
      let zToA = state.countries.sort((b, a) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
        return {
          ...state,
          countries: zToA}

    case SORT_MORE:
      let morePopulated = state.countries.sort((a, b) => a.population - b.population);
      return {
        ...state,
        countries: morePopulated
      }

    case SORT_LESS:
      let lessPopulated = state.countries.sort((a, b) => b.population - a.population);
      return {
        ...state,
        countries: lessPopulated
      }

    case BY_ACTIVITY:
    const filter = action.payload;
    const filteredCountriesbyAct = state.copy.filter(e => e.activities.some(name => name.name === filter));
      return {
        ...state,
        countries: filteredCountriesbyAct};

    case BY_CONTINENT:
        return {
          ...state,
          countries: state.copy.filter((e) => e.continent === action.payload)};

    default:
      return state;
  }
};


export default rootReducer;
