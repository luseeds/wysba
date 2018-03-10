import React from 'react'
import PropTypes from 'prop-types'

import './SectionTitle.css'

const SectionTitle = ({ children, reverse }) => (
  <h3 className={`section-title handwritten ${reverse ? 'reverse' : ''}`}>
    <div>{children}</div>
  </h3>
)
SectionTitle.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SectionTitle
