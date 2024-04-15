import React from 'react'

const MovieInfo = ({movieInfo}) => {
  return (
    <div className='movieCard'>
        <img src={movieInfo.imageurl} alt={movieInfo.title} height='100%' style={{objectFit: 'cover'}}/>
        <div className='movieBody'>
            <div className='movieType'>
                <h3 className='text-danger fs-1 m-0'>N</h3>
                <h6>{movieInfo.type}</h6>
            </div>

            <h1>{movieInfo.title}</h1>
            <p>{movieInfo.released}</p>
            <p className='fs-5 fw-semibold'>{movieInfo.synopsis ? movieInfo.synopsis.slice(0, 250) : null} ... </p>
            <div className='btns'>
                <button className='btn btn-light px-5 me-4'>Play</button>
                <button className='btn btn-dark px-5'>More info</button>
            </div>   
        </div>
    </div>
  )
}

export default MovieInfo