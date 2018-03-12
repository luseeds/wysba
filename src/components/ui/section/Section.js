import React from 'react'
import PropTypes from 'prop-types'

import SectionTitle from './SectionTitle'
import './Section.css'

const Section = ({ title, type = 'primary', className = '', children }) => (
  <section className={`section ${type} ${className}`}>
    <div>
      {title && <SectionTitle type={type}>{title}</SectionTitle>}
      {children}
    </div>
  </section>
)
Section.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Section
