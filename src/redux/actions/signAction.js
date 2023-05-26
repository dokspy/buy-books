export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN'
export const LOG_OUT = 'LOG_OUT'
export const TEST = 'TEST'

const signUpAction = (userData) => {
  return ({
    type: SIGN_UP,
    payload: {
      userData,
    }
  })
}

const signInAction = (userData) => {
  return ({
    type: SIGN_IN,
    payload: {
      userData,
    }
  })
}

const logOutAction = (userData) => {
  return ({
    type: LOG_OUT,
    payload: userData
  })
}

const test = () => {
    return ({
        type: TEST
    })
}

export default {
  signUpAction,
  signInAction,
  logOutAction,
  test
}