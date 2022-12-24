import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //to extract /search/:searchTerm
import {Box, Typography} from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Videos} from "./"

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams(); //extract

  //will run everytime selectedCategory is changed
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setVideos(data.items))
  },[searchTerm])

  return ( //dont need sidebar -> delete that code.only keep the actual videos
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} ml={12.5} sx={{color:'white'}}>
        Search Results for: <span style={{color: '#F31503'}}
        >{searchTerm}</span> videos
      </Typography>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default SearchFeed
