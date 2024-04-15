<<<<<<< HEAD
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';

const ConditionalHeader = ({username, movies, searchItem}) => {
    const [q, setQ] = useState([]);
    const [filteredAPI, setFilteredAPI] = useState("")
    const history = useHistory();

    const searchItems = (searchValue)=> {
        setQ(searchValue)
        const filterData = movies.filter((item)=>{
          return Object.values(item).toString().toLowerCase().includes(q.toString().toLowerCase())
        });
        // console.log(filterData)
        setFilteredAPI(filterData);
        return filteredAPI
    }

    const handleLogout = () => {
      sessionStorage.clear();
      sessionStorage.removeItem("token");
      history.push("/");
    }

   
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid justify-content-around text-center">
        <Link to="/" className="navbar-brand text-danger fs-1 fw-bold" > NETFLIX </Link>
        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              TV Shows
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              Movies
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to='/movies' className="text-decoration-none text-light">
              New & Popular
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to='/movies' className="text-decoration-none text-light">
              My List
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item me-3">
            <input 
              className='form-control' 
              type='search' 
              placeholder='search' 
              value={q} 
              onChange={(e)=>searchItems(e.target.value)}
              searchItem={searchItem(filteredAPI)}
            />
          </li>
          <li className="nav-item me-3">
            {username}
          </li>
          <li className="nav-item me-3">
            <button type="submit" className='btn btn-danger' onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ConditionalHeader

=======
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';

const ConditionalHeader = ({username, movies, searchItem}) => {
    const [q, setQ] = useState([]);
    const [filteredAPI, setFilteredAPI] = useState("")
    const history = useHistory();

    const searchItems = (searchValue)=> {
        setQ(searchValue)
        const filterData = movies.filter((item)=>{
          return Object.values(item).toString().toLowerCase().includes(q.toString().toLowerCase())
        });
        // console.log(filterData)
        setFilteredAPI(filterData);
        return filteredAPI
    }

    const handleLogout = () => {
      sessionStorage.clear();
      sessionStorage.removeItem("token");
      history.push("/");
    }

   
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid justify-content-around text-center">
        <Link to="/" className="navbar-brand text-danger fs-1 fw-bold" > NETFLIX </Link>
        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              TV Shows
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/movies" className="text-decoration-none text-light">
              Movies
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to='/movies' className="text-decoration-none text-light">
              New & Popular
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to='/movies' className="text-decoration-none text-light">
              My List
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item me-3">
            <input 
              className='form-control' 
              type='search' 
              placeholder='search' 
              value={q} 
              onChange={(e)=>searchItems(e.target.value)}
              searchItem={searchItem(filteredAPI)}
            />
          </li>
          <li className="nav-item me-3">
            {username}
          </li>
          <li className="nav-item me-3">
            <button type="submit" className='btn btn-danger' onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ConditionalHeader

>>>>>>> 36088f84ff902e78a6fbc0901a7ab68398c7e7e6
