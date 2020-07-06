import React, { useState, useEffect } from 'react';

import { getVideoIdsFromPlayList, getVideoDetails } from './api';
import { comparatorForLikes } from './helperFunction';

import Search from './Search';
import Results from './Results';

const Dashboard = () => {
  const [playlistID, setPlaylistID] = useState('');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const videoIds = await getVideoIdsFromPlayList(playlistID);
        const videos = await Promise.all(videoIds.map(getVideoDetails));
        videos.sort(comparatorForLikes);
        setVideos(videos);
      } catch (e) {
        console.log('something went-wrong', JSON.stringify(e));
      }
    })();
  }, [playlistID]);
  return (
    <div>
      <Search submitID={setPlaylistID} />
      {playlistID != '' && videos.length != 0 && <Results videoList={videos} />}
    </div>
  );
};

export default Dashboard;
