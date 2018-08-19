import React from 'react';
import PropTypes from 'prop-types'

const Gif = ({ url, username }) => {
  return (
    <img
      src={url}
      alt={username}
    >
    </img>
  )
}

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default Gif
