import React from 'react'

const Search = props => {

  const handleSearch = (e) => {
    console.log(e.target.value);
    props.search(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
