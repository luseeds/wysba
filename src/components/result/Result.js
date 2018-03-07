import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'

const Result = ({ ratio, children }) => (
  <div>
    <span>Human lifespan is 79 years. So you lived {ratio}% of a 'standard' life.</span>
    <Animals ratio={ratio}/>
  </div>
)
Result.propTypes = {
  ratio: PropTypes.number,
  children: PropTypes.node,
}

const select = (state) => ({ ratio: state.age.ratio })
export default connect(select)(Result)
