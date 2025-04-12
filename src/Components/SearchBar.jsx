import React from 'react'

function SearchBar({ search, onSearch }) {
  // This component is used to search for expenses
  // It takes two props: search and onSearch
  // search is the current search term
  // onSearch is a function that updates the search term
  return (
    <input

        type="text"
        placeholder="Search expenses"
        value={search}
        onChange={(event) => onSearch(event.target.value)}
    
    />
  )
}

export default SearchBar