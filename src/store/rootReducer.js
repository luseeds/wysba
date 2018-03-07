import { combineReducers } from 'redux'
import { reducer as age } from 'components/age/ageStore'
import { reducer as animals } from 'components/animals/animalsStore'

const rootReducer = combineReducers({
  age,
  animals,
})

export default rootReducer
