import React from 'react';

const Paginado = ({countriesPerPage, currentPage, setCurrentPage, totalCountries}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++){
    pageNumbers.push(i)
  }

  const onPreviusPage = () => {
    if(currentPage > 1){setCurrentPage(currentPage - 1)}
    }

    const onNextPage = () => {
      if(currentPage < pageNumbers.length)
      {setCurrentPage(currentPage + 1)}
      }

    const onSpecificPage = (n) => {
      setCurrentPage(n);
    }

    return(
      <nav>
        <button onClick={onPreviusPage}>←</button>
        <button onClick={onNextPage}>→</button>
        <ul>
          {pageNumbers.map(numPage=>(
            <li key = {numPage} >
            <button onClick={()=> onSpecificPage(numPage)}>
                {numPage}
                </button>
            </li>
            ))}
        </ul>
      </nav>
    )
}

export default Paginado;
