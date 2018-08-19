import React from 'react';
import PropTypes from 'prop-types'

import './Gif.css'

const Gif = ({ url, username }) => {
  return (
    <div className="gif">
      <img src={url} alt={username}></img>
    </div>
  )
}

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default Gif
