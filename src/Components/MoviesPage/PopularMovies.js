import React from 'react'
import Card from './Card';

const PopularMovies = ({moviesList}) => {
  return (
    <div className="container">
        <div className='row'>
        {moviesList && moviesList.map((item) => (
            <div className="col">
                <Card movie={item} key={item._id}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default PopularMovies