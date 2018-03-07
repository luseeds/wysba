import React from 'react'

import AgeForm from './AgeForm'
import AgeInput from './AgeInput'

import './Age.css'

const Age = () => (
  <section className="age">
    <AgeForm>
      <div className="age-question">I am <AgeInput/> years old</div>
      { null && <button type="submit">Confirm</button> }
    </AgeForm>
  </section>
)

export default Age
