import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'

const Result = ({ age, children }) => {
  if (!age.confirmed || !age.value) {
    return null
  }

  return <div>
    <span>Human lifespan is 79 years. So you lived {age.ratio}% of a 'standard' life.</span>
    <Animals ratio={age.ratio}/>
  </div>
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
