import React from "react";
import VideoLink from "../../../components/VideoLink";

function Video() {
  const videos = [
    {
      videoId: 'JTgPmkkQr5c',
      thumbnail: '/images/thumbnail1.jpg',
      title: 'Si Penakluk Rajawali',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'v1ol1FuoIbs',
      thumbnail: '/images/thumbnail2.jpg',
      title: 'Legenda Nenek Pakande',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'sQ79H99m0lw',
      thumbnail: '/images/thumbnail3.jpg',
      title: 'I Laurang',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: '7QvAQly8u5Y',
      thumbnail: '/images/thumbnail4.jpg',
      title: 'Putri Tandampalik',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'hZPNSqiIep0',
      thumbnail: '/images/thumbnail5.jpg',
      title: 'Sawerigading',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'TIhTK-V1rMc ',
      thumbnail: '/images/thumbnail6.jpg',
      title: 'Lamadukelleng',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'KUu2kpRnyyk ',
      thumbnail: '/images/thumbnail7.jpg',
      title: 'La Upe',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
    {
      videoId: 'JG4zQwV7I7A',
      thumbnail: '/images/thumbnail8.jpg',
      title: 'Ambo Upe & Burung Beo',
      description: 'Cerita Rakyat Sulawesi Selatan',
    },
  ];
  return (
    <div className="flex flex-col h-fit max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto py-8 mb-2">
      {videos.map((video) => (
        <VideoLink
          key={video.videoId}
          videoId={video.videoId}
          thumbnail={video.thumbnail}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
    </div> 
  );
}

export default Video;
