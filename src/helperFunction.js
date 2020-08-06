const url = require('url');

/**
 * Sorts descending based on viewCount / popularity
 */
function comparatorForViews(a, b) {
  return b.statistics.viewCount - a.statistics.viewCount;
}

/**
 * Sorts descending based on likeCount / popularity
 */

function comparatorForLikes(a, b) {
  return b.statistics.likeCount - a.statistics.likeCount;
}

function getPlaylistId(playlistUrl) {
  const parsedUrl = url.parse(playlistUrl, true);
  if (!parsedUrl.host.includes('youtube.com')) return undefined;
  return parsedUrl.query.list;
}

function generateRandomNumber(){
  return Math.floor((Math.random() * 10) + 1);
}

module.exports = { comparatorForViews, comparatorForLikes, getPlaylistId, generateRandomNumber };
