import React from 'react';
import PropTypes from 'prop-types';
import Gif from '../gif/Gif';

const GifList = ({ gifs }) => (
  <div>
    {gifs.map(gif => (
      <Gif key={gif.id} {...gif} />
    ))}
  </div>
)

GifList.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default GifList
