import React, { PropTypes } from 'react'

const Arrow = ({ width, color, style }) => {
  const pathData = [
    'M', [width / 2, 0],
    'L', [width, width],
    'L', [0, width],
    'Z'
  ].join(' ')

  return (
    <div style={style}>
      <svg width={width} height={width}>
        <path fill={color} stroke={color} d={pathData} />
      </svg>
    </div>
  )
}

Arrow.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Arrow
