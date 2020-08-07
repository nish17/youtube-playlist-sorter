import React, { useState, useEffect, useMemo } from 'react';
import abbreviate from 'number-abbreviate';
import ResultsTable from './ResultsTable';

const Results = ({ videoList }) => {
  const [videos, setVideos] = useState([]);

  function mapData() {
    const videosData = [];
    videoList.map((video, index) => {
      return videosData.push({
        key: video.id,
        sno: index + 1,
        thumbnail: video.snippet.thumbnails.default.url,
        url: `https://www.youtube.com/watch?v=${video.id}`,
        title: video.snippet.title,
        views: video.statistics.viewCount,
        likes: video.statistics.likeCount
      });
    });
    setVideos(videosData);
  }

  useEffect(() => {
    mapData();
  }, [videoList]);

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'sno',
      },
      {
        Header: 'Video Thumbnail',
        Cell: (row) => {
          return (
            <div>
              <a href={row.row.original.url} target='_blank'>
                <img
                  className='thumbnail-image'
                  src={row.row.original.thumbnail}
                />
              </a>
            </div>
          );
        },
        accessor: 'thumbnail',
      },
      {
        Header: 'Video Title',
        Cell: (row) => {
          return (
            <div>
              <a href={row.row.original.url} target='_blank'>
                <div>{row.row.original.title}</div>
              </a>
            </div>
          );
        },
        accessor: 'title',
      },
      {
        Header: 'Views',
        accessor: 'views',
      },
      {
        Header: 'Likes',
        accessor: 'likes',
      },
    ],
    []
  );

  return (
    <div className='results-container'>
      {videos.length > 0 && <ResultsTable columns={columns} data={videos} />}
      {videos.length === 0 && <div>No videos received!</div>}
    </div>
  );
};

export default Results;
