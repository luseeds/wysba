import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAge } from './ageStore'

class AgeInput extends React.Component {
  onChange = (event) => this.props.setAge(Number(event.target.value))

  render() {
    return <input type="number" onChange={this.onChange}/>
  }

  static propTypes = {
    setAge: PropTypes.func,
  }
}

export default connect(null, { setAge })(AgeInput)
