import React from 'react';

function Media({ type, link }) {
  return (
    <div className="media-container h-full">
      {type === 'image' ? (
        <img
          src={link}
          alt="Media content"
          className="w-full h-full "
        />
      ) : type === 'video' ? (
        <iframe
          src={link}
          title="Media content"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-red-500">Invalid media type</p>
      )}
    </div>
  );
}

export default Media;
