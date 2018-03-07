import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'

const Result = ({ age, children }) => {
  const showResult = age.confirmed && age.value
  return showResult
    ? <div><Animals/></div>
    : null
}
Result.propTypes = {
  age: PropTypes.shape({
    confirmed: PropTypes.bool,
    value: PropTypes.number,
    ratio: PropTypes.number,
  }),
  children: PropTypes.node,
}

const select = (state) => ({ age: state.age })
export default connect(select)(Result)
