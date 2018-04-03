import React from 'react'
import PropTypes from 'prop-types'

import Animal from 'components/animals/Animal'
import Label from 'components/ui/label/Label'
import Section from 'components/ui/section/Section'
import { HUMAN_LIFE_EXPECTANCY } from 'components/age/ageStore'
import './Explanation.css'

const exampleAnimal = { name: 'animal name', lifespan: 'natural lifespan', slaughter: 'slaughter age', ratio: 4.17, key: 'unknown' }

const Explanation = ({ ratio }) => (
  <Section title="Explanation" type="secondary" className="result-explanation">
    <p>This is how you can read the data:</p>
    <Animal ratio={ratio} animal={exampleAnimal}/>
    <div className="text-justify">
      <div>
        <div>If it's green: <Label type="alive">you would still be alive</Label></div>
        <div>If it's red: <Label type="dead">you would be dead</Label></div>
        <p>The <Label type="slaughter">yellow</Label> part represents the animal lifespan when exploited by the meat / dairy / egg industry.</p>
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
          {ratio ? <span> So in your case, it's <strong>{ratio}%</strong>. (it's only statistics, of course you can live longer!)</span> : null}
        </div>
        <br/>
        <div>
          We then compare this <strong>ratio</strong> with the age at which animals are slaughtered versus their natural lifespan.
          <ul className="explanation-bar-list">
            <li>If the bar is <Label type="dead">red</Label>, your ratio is higher than the animal's ratio. It means that if you were this animal, you will be already <Label type="dead">dead</Label>.</li>
            <li>If the bar is <Label type="alive">green</Label>, your ratio is lower than the animal's ratio. It means that if you were this animal, you will still be <Label type="alive">alive</Label> (but <strong>exploited</strong>..).</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
)
Explanation.propTypes = {
  ratio: PropTypes.number,
}

export default Explanation
