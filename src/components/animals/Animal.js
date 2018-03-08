import React from 'react'
import PropTypes from 'prop-types'

import './Animal.css'
import * as images from './images'

class Animal extends React.Component {
  render() {
    const { animal, ratio } = this.props
    const className = ratio < animal.ratio ? 'alive' : 'dead'

    return <div className={`animal ${className}`}>
      <div className="picture"><img src={images[animal.key]} alt="pig"/></div>
      <div className="content">
        <div className="name">{animal.name}</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${animal.ratio}%` }}></div>
          <div className="slaughter">{animal.slaughter}</div>
          <div className="lifespan">{animal.lifespan}</div>
        </div>
      </div>
    </div>
  }
}
Animal.propTypes = {
  ratio: PropTypes.number,
  animal: PropTypes.object,
}

export default Animal
