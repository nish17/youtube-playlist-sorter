import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getPlaylistId } from './helperFunction';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import * as ga from './analytics';

const Search = ({ submitID }) => {
  const [playlistURL, setURL] = useState('');
  const mainRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      if (playlistURL) {
        const playlistID = getPlaylistId(playlistURL);
        ga.logEvent('PlaylistID submitted', playlistID);
        return submitID(playlistID);
      }
    },
    [playlistURL, submitID]
  );

  useEffect(() => {
    ga.logPageView();
    mainRef.current.focus();
  }, [mainRef]);

  useEffect(() => {
    if (window._youtubePlaylistURL) {
      setURL(window._youtubePlaylistURL);
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className='search-bar-container'>
      <InputGroup className='mb-3' size='lg'>
        <FormControl
          id='search-input-1'
          ref={mainRef}
          placeholder='Youtube playlist URL goes here!'
          value={playlistURL}
          onChange={(e) => setURL(e.target.value)}
          aria-label='Youtube playlist URL goes here!'
          aria-describedby='basic-addon2'
        />
        <Button id='go-button' variant='secondary' onClick={handleSubmit}>
          Go!
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
