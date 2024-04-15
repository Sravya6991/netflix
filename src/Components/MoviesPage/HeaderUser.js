import React from 'react'
import ConditionalHeader from './ConditionalHeader';

const HeaderUser = (props) => {
  return (
    <>
      <ConditionalHeader username={props.username} movies={props.movies} searchItem={props.filterData}/>
    </>
  )
}



export default HeaderUser