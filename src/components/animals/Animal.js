import React from 'react'
import PropTypes from 'prop-types'

class Animal extends React.Component {
  render() {
    const { animal, ratio } = this.props
    const color = ratio < animal.ratio ? 'green' : 'red'

    return <div style={{ color }}>
      Name : {animal.name}
      Natural life span : {animal.lifespan}
      Slaughter age : {animal.slaughter}
      Ratio : {animal.ratio}
    </div>
  }
}
Animal.propTypes = {
  ratio: PropTypes.number,
  animal: PropTypes.object,
}

export default Animal
