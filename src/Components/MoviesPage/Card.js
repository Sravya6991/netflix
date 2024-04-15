import React from "react";
import { Link } from "react-router-dom";

const Card = ({movie}) => {
  return (
    <Link to={`/details/${movie.title}?type=${movie.type}`} style={{textDecoration: 'none'}}>
        <div className="card" key={movie._id}>
          <img src={movie.imageurl} className="card-img-top bg-dark" alt={movie.title}/>
        </div>
    </Link>
  );
};

export default Card;
