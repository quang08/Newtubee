import { useState, useEffect } from "react";
import {Box, Stack, Typography} from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Sidebar, Videos} from "./"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  //will run everytime selectedCategory is changed
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
   <Stack sx={{flexDirection: {sx:'column', md: 'row'}}}>
    <Box sx={{height:{sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md:2}}}>
      <Sidebar //passing props 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Typography className="copyright" varient="body2" sx={{mt: 1.5, color: '#fff'}}>
        Copyright 2022 NewTube
      </Typography>
    </Box>

    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} ml={12.5} sx={{color:'white'}}>
        {selectedCategory} <span style={{color: '#F31503'}}
        >Videos</span>
      </Typography>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
   </Stack>
  )
}

export default Feed
