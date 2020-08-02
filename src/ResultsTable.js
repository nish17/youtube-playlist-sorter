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
    <tr key={id} className='single-row' >
      <td className='result-sno' scope='row'>
        {serialNo}
      </td>
      <td className='result-thumbnail' scope='row'>
        <img src={thumbnail} />
      </td>
      <td className='result-title' scope='row'>
        <a href={url} target='_blank'>
          {title}
        </a>
      </td>
      <td className='result-views' scope='row'>{views}</td>
      <td className='result-likes' scope='row'>{likes}</td>
    </tr>
  );
};

export default ResultsTable;
