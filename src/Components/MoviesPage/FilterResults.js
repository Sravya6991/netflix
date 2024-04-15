import React from 'react'
import { Link } from 'react-router-dom';

const FilterResults = ({filterAPI}) => {
  return (
    <div className='container'>
       {filterAPI.map(item=>(
            <span className='rounded-pill text-center m-2 px-2 display-flex align-items-center border border-light'>
              <Link to={`/details/${item.title}?type=${item.type}`} className="text-decoration-none text-light">
              {item.title}
              </Link>
            </span>
        ))}
    </div>
  )
}

export default FilterResults;