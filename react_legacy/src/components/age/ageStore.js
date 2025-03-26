const HUMAN_LIFE_EXPECTANCY = 79

const SET = 'AGE/SET'

const setAge = (age) => ({ type: SET, value: age })

const reducer = (state = { ratio: 0 }, payload) => {
  switch (payload.type) {
    case SET:
      return { ...state, value: payload.value, ratio: parseFloat(((100 * payload.value) / HUMAN_LIFE_EXPECTANCY).toFixed(2)) }
    default:
      return state
  }
}

export { setAge, reducer, HUMAN_LIFE_EXPECTANCY }
