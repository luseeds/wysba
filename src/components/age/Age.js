import React from 'react'

import AgeForm from './AgeForm'
import AgeInput from './AgeInput'

const Age = () => (
  <div>
    <span>How old are you?</span>
    <AgeForm>
      <AgeInput/>
      <button type="submit">Confirm</button>
    </AgeForm>
  </div>
)

export default Age
