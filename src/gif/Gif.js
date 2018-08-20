import React from 'react';
import PropTypes from 'prop-types'

import './Gif.css'

const Gif = ({ url, title }) => {
  return (
    <div className="gif">
      <img src={url} alt={title}></img>
    </div>
  )
}

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Gif
