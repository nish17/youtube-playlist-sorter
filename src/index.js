const pathsw = 'sw.js';
navigator.serviceWorker
  .register(pathsw)
  .then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
            );
          } else {
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  })
  .catch((error) => {
    console.error('==>Error during service worker registration:', error);
  });
window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  window._youtubePlaylistURL = parsedUrl.searchParams.get('text');
});

/* if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then((reg) => console.log('Success: ', reg.scope))
      .catch((err) => console.log('Failure: ', err));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  window._youtubePlaylistURL = parsedUrl.searchParams.get('text');
});
 */
