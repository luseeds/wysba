import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animal from './Animal'

const Animals = ({ age, animals }) => {
  return <div>
    { animals.map((animal) => <Animal key={animal.name} animal={animal} age={age}/>) }
  </div>
}
Animals.propTypes = {
  age: PropTypes.number,
  animals: PropTypes.array,
}

const select = (state) => ({ animals: state.animals.data })
export default connect(select)(Animals)
