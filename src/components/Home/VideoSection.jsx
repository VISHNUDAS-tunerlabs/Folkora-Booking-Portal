import React from 'react';
import frameVideo from '../../assets/videos/framevideo.mp4';

function VideoSection() {
  return (
    <div className="video-section">
      <video 
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        src={frameVideo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
