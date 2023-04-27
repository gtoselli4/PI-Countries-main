import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCountriesById } from "../redux/actions/index.js";
import { Link } from "react-router-dom";
import Paginado from "./paginado.js";

const Cards = ({currentPage, setCurrentPage}) => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const totalCountries = countries.length;
  const [countriesPerPage] = useState(10);
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  const handleDetail = (e) => {
    dispatch(getCountriesById(e.target.value))
  }

  return(
        <div>
          {countries.map((e)=>(
            <div key = {e.id}>
              <div>
                <div>
                  <img src={e.flags} alt={`${e.name} flag`}></img>
                  <h3>Nombre: {e.name}</h3>
                  <h5>Continente: {e.continents} </h5>
                  <Link to={`/home/${e.id}`}>
                    <button value={e.id} onClick={(e)=>handleDetail(e)}>Ver detalles</button>
                  </Link>
                </div>
              </div>
            </div>
          )).slice(firstIndex, lastIndex)}
          <Paginado countriesPerPage={countriesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCountries={totalCountries}/>
        </div>
  );

}

export default Cards;
