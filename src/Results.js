import React, { useState, useEffect } from 'react';
import ResultsTable from './ResultsTable';
// import Resul

const abbreviate = require('number-abbreviate');

const Results = ({ videoList }) => {
  const [videos, setVideos] = useState([]);

  function formatVideos() {
    const formattedVideos = videoList.map((video, index) => {
      return (
        <ResultsTable
          key={video.id}
          url={`https://www.youtube.com/watch?v=${video.id}`}
          serialNo={index + 1}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.default.url}
          views={abbreviate(video.statistics.viewCount, 1)}
          likes={abbreviate(video.statistics.likeCount, 1)}
        />
        // <li key={video.id}>
        //   <a href={`https://www.youtube.com/watch?v=${video.id}`}>
        //     {`${index + 1}. ${video.snippet.title} [👀  ${abbreviate(video.statistics.viewCount,1)} / 👍  ${abbreviate(video.statistics.likeCount, 1)}]`}
        //   </a>
        // </li>
      );
    });
    setVideos(formattedVideos);
  }

  useEffect(() => {
    formatVideos();
  }, []);

  return (
    <div className='results-container'>
      {/* <h1>Here you go!</h1> */}
      <thead class='thead-dark'>
        <tr>
          <th className='th-sno' scope='col'>
            #
          </th>
          <th className='th-thumbnail' scope='col'>
            Video Thumbnail
          </th>
          <th className='th-title' scope='col'>
            Video Title
          </th>
          <th className='th-views' scope='col'>
            Views
          </th>
          <th className='th-likes' scope='col'>
            Likes
          </th>
        </tr>
      </thead>
      <div>{videos}</div>
      {/* < */}
    </div>
  );
};

export default Results;
