const HUMAN_LIFE_EXPECTANCY = 79

const SET = 'AGE/SET'
const CONFIRM = 'AGE/CONFIRM'

const setAge = (age) => ({ type: SET, value: age })
const confirmAge = () => ({ type: CONFIRM })

const reducer = (state = {}, payload) => {
  switch (payload.type) {
    case SET:
      return { ...state, value: payload.value, ratio: parseFloat(((100 * payload.value) / HUMAN_LIFE_EXPECTANCY).toFixed(2)) }
    case CONFIRM:
      return { ...state, confirmed: true }
    default:
      return state
  }
}

export { setAge, confirmAge, reducer }
