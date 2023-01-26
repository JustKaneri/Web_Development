import React from 'react';
import Player from 'react-custom-player'
import VideoFile from '../assets/video.mp4'

const About = () => {

    const video = {
        src:VideoFile,
        poster:''
    }

    return (
        <div>
            <Player
                video={video}
            />
        </div>
        
        
    );
}

export default About;
