import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'
import Animal from 'components/animals/Animal'
import './Result.css'

const exampleAnimal = { name: 'animal name', lifespan: 'natural lifespan', slaughter: 'slaugther age', ratio: 4.17, key: 'unknown' }

const Result = ({ ratio, children }) => (
  <div>
    <section className="result-animals">
      <span>Human lifespan is 79 years. So you lived {ratio}% of a 'standard' life.</span>
      <Animals ratio={ratio}/>
    </section>
    <section className="result-explanation">
      <h3>Explanation</h3>
      <div className="explanation">
        <div className="text-center">This is how you can read a result:</div>
        <Animal ratio={ratio} animal={exampleAnimal}/>
        <div>
          <p>The yellow part represents the animal lifespan when exploited by the meat / dairy / egg industry.</p>
          <p>
            The end of the yellow part refers to his slaughter date. This is how old he is when killed.
            The reason might be that he is not profitable anymore or because it's time to kill him for his meat.
          </p>
        </div>
        <div>
          The full progressbar represents his natural life time.
          We can clearly see how short their lives are when exploited.
        </div>
      </div>
    </section>
  </div>
)
Result.propTypes = {
  ratio: PropTypes.number,
  children: PropTypes.node,
}

const select = (state) => ({ ratio: state.age.ratio })
export default connect(select)(Result)
