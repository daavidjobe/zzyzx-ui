import React, { PropTypes } from 'react'

const Arrow = ({ width, color, style, elementClass }) => {
  const pathData = [
    'M', [width / 2, Math.abs(width * 0.5)],
    'L', [width, width],
    'L', [0, width],
    'Z'
  ].join(' ')

  return (
    <div className={elementClass} style={style}>
      <svg width={width} height={width}>
        <path fill={color} stroke={color} d={pathData} />
      </svg>
    </div>
  )
}

Arrow.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
  elementClass: PropTypes.string
}

export default Arrow
