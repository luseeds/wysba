import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { confirmAge } from './ageStore'

class AgeForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault()
    // on Android remove the focus on the input
    document && document.activeElement && document.activeElement.blur()
    this.props.confirmAge()
  }

  render() {
    return <form onSubmit={this.onSubmit}>{this.props.children}</form>
  }

  static propTypes = {
    children: PropTypes.node,
    confirmAge: PropTypes.func,
  }
}

export default connect(null, { confirmAge })(AgeForm)
