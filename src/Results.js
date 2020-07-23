import React, { useState } from 'react';
import abbreviate from 'number-abbreviate';
import ResultsTable from './ResultsTable';

const Results = ({ videoList }) => {
  // const [videos, setVideos] = useState(videoList);
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('views');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function onSort(event, sortKey) {
    let key = '';
    // const data = this.state.data;
    handleRequestSort(event, sortKey);
    if (sortKey === 'views') {
      key = 'viewCount';
    } else if (sortKey === 'likes') {
      key = 'likeCount';
    }
    /* else if(sortKey === 'title'){
      setOrderBy('title');
      videos.sort( (a, b) => a.localeCompare(b));
      return; 
    } */

    videoList.sort((a, b) => {
      if (order === 'asc') return a['statistics'][key] - b['statistics'][key];
      else return b['statistics'][key] - a['statistics'][key];
    });
    // setVideos(videos);
  }

  return (
    <div className='results-container'>
      <table className='table table-borderless'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Thumbnail</th>
            <th scope='col'>
              Video Title
              {/* <span>{orderBy==='title'? order==='desc'?'🔽':' 🔼':''}</span> */}
            </th>
            <th scope='col' onClick={(e) => onSort(e, 'views')}>
              Views
              <span>
                {orderBy === 'views' ? (order === 'desc' ? '🔽' : '🔼') : ''}
              </span>
            </th>
            <th scope='col' onClick={(e) => onSort(e, 'likes')}>
              Likes
              <span>
                {orderBy === 'likes' ? (order === 'desc' ? '🔽' : '🔼') : ''}
              </span>
            </th>
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
