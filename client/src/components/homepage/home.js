import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/index.js';

const Home(){
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(getCountries());
  },[dispatch])



  return (
    <div>
    <Link to = '/activities'>Crear nueva actividad</Link>
    <h1>HOME</h1>
    </div>
  )
}

export default Home;
