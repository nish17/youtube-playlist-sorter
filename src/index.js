if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw.js')
      .then((reg) => console.log('Success: ', reg.scope))
      .catch((err) => console.log('Failure: ', err));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  window._youtubePlaylistURL = parsedUrl.searchParams.get('text');
});
