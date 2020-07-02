import React, { useState, useEffect } from 'react';

import { getVideoIdsFromPlayList, getVideoDetails } from './api';
import { comparatorForLikes } from './helperFunction';
import Search from './Search';
import Results from './Results';

require('dotenv').config();

const Dashboard = () => {
  const [playlistID, setPlaylistID] = useState('');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const videoIds = await getVideoIdsFromPlayList(playlistID);
        const videos = await Promise.all(videoIds.map(getVideoDetails));
        setVideos(videos.sort(comparatorForLikes));
      } catch (e) {
        console.log('something went-wrong',e);
      }
    })();
  }, [playlistID]);
  return (
    <div>
      <Search submitID={setPlaylistID} />
      <Results videos={videos} />
      {playlistID != '' && <h1> PlaylistID: {playlistID}</h1>}
    </div>
  );
};

export default Dashboard;
