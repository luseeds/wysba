import React from 'react'
import PropTypes from 'prop-types'

class Animal extends React.Component {
  render() {
    const { animal } = this.props

    return <div>
      Name : {animal.name}
      Natural life span : {animal.lifespan}
      Slaughter age : {animal.slaughter}
    </div>
  }
}
Animal.propTypes = {
  age: PropTypes.number,
  animal: PropTypes.object,
}

export default Animal
