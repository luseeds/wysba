import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

const Label = ({ type = '', children }) => <span className={`label ${type}`}>{children}</span>
Label.propTypes = {
  type: PropTypes.oneOf(['slaughter', 'alive', 'dead']),
  children: PropTypes.node,
}

export default Label
