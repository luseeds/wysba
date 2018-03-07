import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AgeForm from './AgeForm'
import AgeInput from './AgeInput'

import './Age.css'

const Age = ({ age }) => (
  <section className="age">
    <AgeForm>
      <div className="age-question">I am <AgeInput/> {age > 1 ? 'years' : 'year'} old</div>
    </AgeForm>
  </section>
)
Age.propTypes = {
  age: PropTypes.number,
}

const select = (state) => ({ age: state.age.value })
export default connect(select)(Age)
