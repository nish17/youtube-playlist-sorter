const url = require('url');

function getPlaylistId(playlistUrl) {
  const parsedUrl = url.parse(playlistUrl, true);
  if (!parsedUrl.host.includes('youtube.com')) return undefined;
  return parsedUrl.query.list;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

module.exports = {
  getPlaylistId,
  generateRandomNumber,
};
