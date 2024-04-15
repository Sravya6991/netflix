import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../../movies.css";
import HeaderUser from './HeaderUser';
import PopularMovies from './PopularMovies';
import FilterResults from './FilterResults';

const murl = "http://localhost:3500/movies";
const surl = "http://localhost:3500/shows";
const url = "http://localhost:3500/userInfo";
const aurl = "http://localhost:3500/all";

const Movies = () => {
  const [movies, setMovies] = useState("");
  const [shows, setShows] = useState("");
  const [user, setUser] = useState("")
  const [all, setAll] = useState("");
  const [filteredData, setFilteredData] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mresponse = await axios.get(murl, {
          method: 'GET',
          headers: {
            'Content-Type': "application/json"
          }
        });
        const sresponse = await axios.get(surl, {
          method: 'GET',
          headers: {
            'Content-Type': "application/json"
          }
        });
        const uresponse = await axios.get(`${url}`, {
          headers: {
            "x-access-token": sessionStorage.getItem("token")
          }
        });
        const aresponse = await axios.get(aurl, {
          method: 'GET',
          headers: {
            'Content-Type': "application/json"
          }
        });
        const movies = mresponse.data;
        const shows = sresponse.data;
        const userInfo = uresponse.data;
        const all = aresponse.data;

        setMovies(movies);
        setShows(shows);
        setAll(all);
        setUser(userInfo);

      } catch(err) {
      console.log(err);
      }
    }
    fetchData();
  },[])

  const filterItems = (items)=>{
    setFilteredData(items)
    console.log(filteredData)
  }

  return (
    <>
    { user.userName ? 
      (<div>        
        <HeaderUser username={user.userName} movies={all} filterData={filterItems}/>

        {(filteredData[0]) ? <FilterResults filterAPI={filteredData}/> : null}
        <div>
          <h4 className='mx-5'>Popular Movies</h4>
          <PopularMovies moviesList={movies}/>
        </div>

        <div>
          <h4 className='mx-5'>Popular Shows</h4>
          <PopularMovies moviesList={shows}/>
        </div>
      </div>)
    :
      (<div>
        <p>Oops!! user not authorized</p>
      </div>)
    }
  </>
  )
}

export default Movies