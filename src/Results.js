import React, { useState, useEffect } from 'react';

const abbreviate = require('number-abbreviate');

const Results = ({ videoList }) => {
  const [videos, setVideos] = useState([]);

  function formatVideos() {
    const formattedVideos = videoList.map((video, index) => {
      return (
        <li key={video.id}>
          <a href={`https://www.youtube.com/watch?v=${video.id}`}>
            {`${index + 1}. ${video.snippet.title} [👀  ${abbreviate(
              video.statistics.viewCount,
              1
            )} / 👍  ${abbreviate(video.statistics.likeCount, 1)}]`}
          </a>
        </li>
      );
    });
    setVideos(formattedVideos);
  }

  useEffect(() => {
    formatVideos();
  }, []);

  return (
    <div className='results-container'>
      <h1>Here you go!</h1>
      <ul>{videos}</ul>
    </div>
  );
};

export default Results;
