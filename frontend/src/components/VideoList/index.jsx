import React,{ useEffect, useState } from "react"

import { Container, VideoListWrapper } from "./styles"
import AddVideo from "../AddVideo"
import Video from "../Video"

import api from "../../services/api"

export default function VideoList(){

    const [videos, setVideos] = useState([])

   
    useEffect(() => {
        api.get("videos")
        .then(({data}) => {
            setVideos(data.videos)
            
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    return(
        <Container>
            <VideoListWrapper>
                {videos?.map((video) => (
                    <Video 
                    key={video.__id}
                    id={video.__id}
                    title={video.title}
                    link={video.link}
                    liked={video.liked}
                    />
                ))}
                <AddVideo />
            </VideoListWrapper>
        </Container>
    )
}