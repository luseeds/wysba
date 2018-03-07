const SET = 'AGE/SET'
const CONFIRM = 'AGE/CONFIRM'

const setAge = (age) => ({ type: SET, value: age })
const confirmAge = () => ({ type: CONFIRM })

const reducer = (state = {}, payload) => {
  switch (payload.type) {
    case SET:
      return { ...state, value: payload.value }
    case CONFIRM:
      return { ...state, confirmed: true }
    default:
      return state
  }
}

export { setAge, confirmAge, reducer }
