import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Animals.css'
import Animal from './Animal'

const Animals = ({ ratio, animals }) => {
  return <div className="animals">
    { animals.map((animal) => <Animal key={animal.key} animal={animal} ratio={ratio}/>) }
  </div>
}
Animals.propTypes = {
  ratio: PropTypes.number,
  animals: PropTypes.array,
}

const select = (state) => ({ animals: state.animals.data })
export default connect(select)(Animals)
