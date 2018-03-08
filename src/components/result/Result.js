import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Animals from 'components/animals/Animals'
import Animal from 'components/animals/Animal'
import { HUMAN_LIFE_EXPECTANCY } from 'components/age/ageStore'
import './Result.css'

const exampleAnimal = { name: 'animal name', lifespan: 'natural lifespan', slaughter: 'slaugther age', ratio: 4.17, key: 'unknown' }

const Result = ({ age, ratio, children }) => (
  <section className="result">
    <section className="result-animals">
      <span className={age ? '' : 'hidden'}>So you lived {ratio}% of a 'standard' life. (based on a human lifespan of {HUMAN_LIFE_EXPECTANCY} years)</span>
      <Animals ratio={ratio}/>
    </section>
    <section className="result-explanation">
      <div className="explanation">
        <div className="text-center">
          <h3>
            <div className="line"></div>
            <div className="title">Explanation</div>
          </h3>
          <div>This is how you can read a result:</div>
        </div>
        <Animal ratio={ratio} animal={exampleAnimal}/>
        <div>
          <p>The <span className="label slaughter">yellow</span> part represents the animal lifespan when exploited by the meat / dairy / egg industry.</p>
          <p>
            The end of the yellow part refers to his slaughter age. This is how old he is when killed.
            The reason might be that he is not profitable anymore or because it's time to kill him for his meat.
          </p>
        </div>
        <div>
          The full progressbar represents his natural life time.
          We can clearly see how short their lives are when exploited.
        </div>
        <br/><br/>
        <div>
          <div>When you type in your age at the top we calculate a <strong>ratio</strong>.</div>
          <div>
            This represents how many years you lived out of the {HUMAN_LIFE_EXPECTANCY} years in average for a human.
            { ratio ? <span> So in your case, it's <strong>{ratio}%</strong>. (it's only statistics, of course you can live longer!)</span> : null }
          </div>
          <br/>
          <div>
            We then compare this <strong>ratio</strong> with the age at which animals are slaughtered versus their natural lifespan.
            <ul className="explanation-bar-list">
              <li>If the bar is <span className="label dead">red</span>, your ratio is higher than the animal's ratio. It means that if you were this animal, you will be already <span className="label dead">dead</span>.</li>
              <li>If the bar is <span className="label alive">green</span>, your ratio is lower than the animal's ratio. It means that if you were this animal, you will still be <span className="label alive">alive</span> (but <strong>exploited</strong>..).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
)
Result.propTypes = {
  age: PropTypes.number,
  ratio: PropTypes.number,
  children: PropTypes.node,
}

const select = (state) => ({ age: state.age.value, ratio: state.age.ratio })
export default connect(select)(Result)
