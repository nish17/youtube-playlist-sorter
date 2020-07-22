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
      <th className='result-sno' scope='row'>
        {serialNo}
      </th>
      <td className='result-thumbnail'>
        <img src={thumbnail} />
      </td>
      <td className='result-title'>
        <a href={url} target='_blank'>{title}</a>
      </td>
      <td className='result-views'>{views}</td>
      <td className='result-likes'>{likes}</td>
    </tr>
  );
};

export default ResultsTable;
