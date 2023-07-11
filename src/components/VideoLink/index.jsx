import React from "react";

function VideoLink({ videoId, thumbnail, title, description}) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 drop-shadow">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + thumbnail} alt={title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-medium text-gray-800 mb-1">{title}</h2>
        </a>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default VideoLink;