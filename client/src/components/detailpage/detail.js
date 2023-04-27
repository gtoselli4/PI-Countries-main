import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountriesById } from "../../redux/actions/index.js";

const Detail = (props) => {
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
      <img src={detail.flags} alt='flag'/>
      <p>Nombre: {detail.name} </p>
      <p>ID: {detail.id} </p>
      <p>Capital: {detail.capital} </p>
      <p>Continente: {detail.continents} </p>
      <p>Subregion: {detail.subregion} </p>
      <p>Area: {detail.area} </p>
      <p>Población: {detail.poblacion} </p>
      </div>

    </div>

  )
}

export default Detail;
