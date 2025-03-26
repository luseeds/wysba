import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AgeForm from './AgeForm'
import AgeInput from './AgeInput'
import Section from 'components/ui/section/Section'
import './Age.css'

const Age = ({ age }) => (
  <Section className="age handwritten">
    <AgeForm>
      <div className="age-question">I am <AgeInput/> {age > 1 ? 'years' : 'year'} old</div>
    </AgeForm>
  </Section>
)
Age.propTypes = {
  age: PropTypes.number,
}

const select = (state) => ({ age: state.age.value })
export default connect(select)(Age)
