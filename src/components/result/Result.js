import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'
import Section from 'components/ui/section/Section'
import Share from 'components/share/Share'
import Explanation from './Explanation'
import { HUMAN_LIFE_EXPECTANCY } from 'components/age/ageStore'

const Result = ({ age, ratio }) => (
  <div>
    <Section className="result-animals full-width">
      <span className={age ? '' : 'hidden'}>So you lived {ratio}% of a 'standard' life. (based on a human lifespan of {HUMAN_LIFE_EXPECTANCY} years)</span>
      <Animals ratio={ratio}/>
    </Section>
    <Explanation ratio={ratio}/>
    <Share/>
  </div>
)
Result.propTypes = {
  age: PropTypes.number,
  ratio: PropTypes.number,
}

const select = (state) => ({ age: state.age.value, ratio: state.age.ratio })
export default connect(select)(Result)
