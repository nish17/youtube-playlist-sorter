import React from 'react';

const ResultsTable = ({
  id,
  url,
  thumbnail,
  serialNo,
  title,
  views,
  likes,
}) => {
  return (
    <tr key={id}>
      <td className='result-sno'>{serialNo}</td>
      <td className='result-thumbnail'>
        <a href={url}>
          <img
            className='thumbnail-image'
            src={thumbnail}
            alt='Youtube Video Thumbnail'
            target='_blank'
          />
        </a>
      </td>
      <td className='result-title'>
        <a href={url} rel='noopener noreferrer' target='_blank'>
          {title}
        </a>
      </td>
      <td className='result-views'>{isNaN(views) ? 'Disabled' : views}</td>
      <td className='result-likes'>{isNaN(likes) ? 'Disabled' : views}</td>
    </tr>
  );
};

export default ResultsTable;
