import axios from 'axios';


require('dotenv').config();

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function getVideoIdsFromPlayList(playlistId, pageToken) {
  const { data } = await axios.get(`${BASE_URL}/playlistItems`, {
    params: {
      maxResults: '50', // this is the max limit specified in the docs
      part: 'contentDetails',
      playlistId,
      pageToken,
      key: process.env.API_KEY,
    },
  });
  const videoIds = data.items.map((item) => item.contentDetails.videoId);
  if (data.nextPageToken) {
    const nextPageVideoIds = await getVideoIdsFromPlayList(
      playlistId,
      data.nextPageToken
    );
    return [...videoIds, ...nextPageVideoIds];
  }
  return videoIds;
}
export async function getVideoDetails(videoId) {
  const { data } = await axios.get(`${BASE_URL}/videos`, {
    params: {
      id: videoId,
      part: 'snippet,statistics',
      key: process.env.API_KEY,
    },
  });
  return data.items[0];
}