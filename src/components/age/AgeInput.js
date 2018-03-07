import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAge } from './ageStore'

import './AgeInput.css'

class AgeInput extends React.Component {
  onChange = (event) => this.props.setAge(Number(event.target.value))

  render() {
    return <input type="number" className="input-age" onChange={this.onChange}/>
  }

  static propTypes = {
    setAge: PropTypes.func,
  }
}

export default connect(null, { setAge })(AgeInput)
