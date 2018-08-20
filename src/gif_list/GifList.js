import React from 'react'
import PropTypes from 'prop-types'
import Gif from '../gif/Gif'

import './GifList.css'

const GifColumn = ({ gifs }) => (
  <div className="gif-column">
    {gifs.map(gif => (
      <Gif key={gif.id} {...gif} />
    ))}
  </div>
)

GifColumn.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

const GifList = ({ gifs }) => (
  <div className="gif-list">
    {gifs.map((column, index) => (
      <GifColumn key={index} gifs={column} />
    ))}
  </div>
)

GifList.propTypes = {
  gifs: PropTypes.array.isRequired
}

export default GifList
