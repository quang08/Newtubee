import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { Paper, IconButton } from '@mui/material'; //simple div that has white bg and elevation
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){//if there was something input in the searchbar
      navigate(`/search/${searchTerm}`); //navigate to this specific url
      setSearchTerm('')//after searching, reset searchTerm to empty 
    }
  }

    return(
        <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
        }}
      >
        <input
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value) //this is where the input is stored in
          }}
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    )
 
}

export default SearchBar
