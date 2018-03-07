import React from 'react'
import PropTypes from 'prop-types'

class AgeForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault()
    // on Android remove the focus on the input
    document && document.activeElement && document.activeElement.blur()
  }

  render() {
    return <form onSubmit={this.onSubmit}>{this.props.children}</form>
  }

  static propTypes = {
    children: PropTypes.node,
  }
}

export default AgeForm
