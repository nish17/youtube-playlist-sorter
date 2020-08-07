import React, { useState, useEffect, useRef } from 'react';

import { getVideoIdsFromPlayList, getVideoDetails } from './api';

import Search from './Search';
import Results from './Results';
import Error from './Error';

const Dashboard = () => {
  const [playlistID, setPlaylistID] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState({ doesExist: false, type: 'NONE' });
  const [isLoading, setIsLoading] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    (async () => {
      if (playlistID) {
        try {
          setIsLoading(true);
          const videoIds = await getVideoIdsFromPlayList(playlistID);
          const videos = await Promise.all(videoIds.map(getVideoDetails));
          setVideos(videos.filter((v) => (v ? v : null)));
          setIsLoading(false);
          setError({ ...error, doesExist: false });
        } catch (e) {
          setIsLoading(false);
          setError({ doesExist: true, type: 'PLAYLIST_URL_ERROR' });
          console.log('something went-wrong', JSON.stringify(e));
        }
      } else {
        if (didMount.current) {
          setError({ doesExist: true, type: 'PLAYLIST_URL_ERROR' });
        } else {
          didMount.current = true;
        }
      }
    })();
  }, [playlistID]);
  return (
    <div className='dashboard'>
      <Search submitID={setPlaylistID} />
      {playlistID != '' && videos.length != 0 && !error.doesExist && (
        <Results videoList={videos} />
      )}
      {isLoading && (
        <div className='results-container'>
          <div className='alert alert-info' role='alert'>
            Loading...
          </div>
        </div>
      )}
      {error.doesExist && <Error type={error.type} />}
    </div>
  );
};

export default Dashboard;
