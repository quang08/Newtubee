import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {Videos} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0])); //taking the video that was clicked in order to render it
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items)) //taking all the video related to the current video
  },[id])


  if(!videoDetail?.snippet) return '...Loading';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      {/* when small: column, >=md: 2 rows */}
      <Stack direction={{xs: 'column', md:'row'}}> 
        {/* left side */}
        <Box flex={1}> 
          <Box sx={{width: '100%', top: '86px'}}>
            <ReactPlayer className="react-player"url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
              {title}
            </Typography>
            {/* display channel name, views and likes, space between to create '2 col' */}
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="#fff" >
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              {/* display views and like counts */}
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* right side */}
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
