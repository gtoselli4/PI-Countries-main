import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries, getCountriesByName, sortUp, sortDown, sortMore, sortLess, byContinent, byActivity } from '../../redux/actions/index.js';
import Cards from '../cards.js'

import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getCountries());
  },[dispatch])

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    dispatch(getCountriesByName(name.toLowerCase()))
    setName("")
  }

  function handleOnClick(e) {
    dispatch(getCountries())
  }

  function handleSortByPopulation(e) {
    if (e.target.value === 'more') {
      dispatch(sortMore());
    }
    else {
      dispatch(sortLess());
    }
  }

  function handleSortByName(e) {
    if (e.target.value === 'up'){
      dispatch(sortUp());
    }
    else {
      dispatch(sortDown());
    }
  }

  function handleFilterByContinent(e) {
    const continent = e.target.value;
    if (continent) {
      dispatch(byContinent(continent))
    }
  }

  function handleFilterByActivity(e) {
    dispatch(byActivity(e.target.value))
  }

  return (
<div>
  <div>
    <div>
      <input type="search" placeholder='Buscar destino...' onChange={handleChange} value={name}/>

      <button type= "button" onClick={e => {handleSubmit(e)}}>Buscar</button>
    </div>

    <button onClick= {e => {handleOnClick(e)}}>Recargar todos los paises</button>

    <div>
        <select onChange={e => {handleSortByName(e)}}>
            <option selected disabled>Ordenar por nombre</option>
            <option value="up">A→Z</option>
            <option value="down">Z→A</option>
        </select>
    </div>

    <div>
        <select onChange={e => {handleSortByPopulation(e)}}>
            <option selected disabled>Ordenar por población</option>
            <option value="more">Mayor</option>
            <option value="less">Menor</option>
        </select>
    </div>

    <div>
     <select onChange={e => {handleFilterByContinent(e)}}>
         <option selected disabled>Filtrar por continente</option>
         <option value="South America">America del Sur</option>
         <option value="North America">America del Norte</option>
         <option value="Africa">Africa</option>
         <option value="Asia">Asia</option>
         <option value="Oceania">Oceania</option>
         <option value="Europe">Europa</option>
         <option value="Antarctica">Antartida</option>
     </select>
    </div>

    <div>
      <select onChange={e => {handleFilterByActivity(e)}}>
        <option selected disabled>Filtrar por actividad</option>
        <option value="Museums">MUSEUMS</option>
        <option value="Trekking">TREKKING</option>
        <option value="Scuba diving">SCUBA DIVING</option>
        <option value="Sky">SKY</option>
        <option value="Surf">SURF</option>
        <option value="Gastronomy">GASTRONOMY</option>
        <option value="Rafting">RAFTING</option>
        <option value="Ruins">RUINS</option>
        <option value="Camping">CAMPING</option>
        <option value="Wine tourism">WINE TOURISM</option>
      </select>
    </div>

    <div>
    <Link to="/create">
        <button>Crear nueva actividad</button>
    </Link>
    </div>
  </div>

  <div>
    <Cards currentPage={currentPage}
    setCurrentPage = {setCurrentPage}/>
  </div>
</div>
  )
}

export default Home;
