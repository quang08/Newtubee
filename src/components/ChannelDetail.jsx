import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';

const ChannelDetail = () => {
  const {id} = useParams(); //taking the channel's id from the params 

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);
  console.log(channelDetail,videos);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));//fetch the channel's info

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));//fetch the array of videos
  },[id]);
  //Meaning everytime we access a to a channel page, the channel id will change
  //that is will be used to fetch the data and the state will change 
  //as we access the fetched data 

  return (
    <Box minHeight='95vh'>
      <Box>
        <div //for the radient
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10, //above the image
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
