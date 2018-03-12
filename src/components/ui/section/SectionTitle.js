import React from 'react'
import PropTypes from 'prop-types'

import './SectionTitle.css'

const SectionTitle = ({ children, type = 'primary' }) => (
  <h3 className={`section-title handwritten ${type}`}>
    <div>{children}</div>
  </h3>
)
SectionTitle.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node,
}

export default SectionTitle
