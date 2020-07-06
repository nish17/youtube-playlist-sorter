import React from 'react';
import ResultsTable from './ResultsTable';

const abbreviate = require('number-abbreviate');

const Results = ({ videoList }) => {

  return (
    <div className='results-container'>
      <table className='table table-borderless'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Video Thumbnail</th>
            <th scope='col'>Video Title</th>
            <th scope='col'>Views</th>
            <th scope='col'>Likes</th>
          </tr>
        </thead>
        <tbody>
          {videoList.map((video, index) => (
            <ResultsTable
              key={video.id}
              url={`https://www.youtube.com/watch?v=${video.id}`}
              serialNo={index + 1}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.default.url}
              views={abbreviate(video.statistics.viewCount, 1)}
              likes={abbreviate(video.statistics.likeCount, 1)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
