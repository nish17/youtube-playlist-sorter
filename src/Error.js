import React from 'react';

const Error = ({ type }) => {
  return (
    <div>
      {type === 'API_ERROR' && (
        <div className='results-container'>
          <div className='alert alert-danger' role='alert'>
            Woah! Seems like all the users have used today's API Quota. I am so
            sorry to not able to serve you. Please come back tomorrow
          </div>
        </div>
      )}
      {type === 'PLAYLIST_URL_ERROR' && (
        <div className='results-container'>
          <div className='alert alert-danger' role='alert'>
            Uh oh! I am unable to talk to YouTube with this Playlist URL. Please
            enter a valid playlist URL and try again :)
          </div>
        </div>
      )}
    </div>
  );
};

export default Error;
