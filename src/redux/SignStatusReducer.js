import { SIGN_IN, SIGN_UP, LOG_OUT, TEST } from './actions/signAction';



const initialState = {
    userLog: JSON.parse(localStorage.getItem('userLog')) || [],
    userLogStatus: false,
    userLogError: {
        email: {
            errorMessage: '',
            errorStatus: false,
        },
        password: {
            errorMessage: '',
            errorStatus: false,
        }
    },
    content: '',
    register: JSON.parse(localStorage.getItem('userData')) || []
}

const createUser = (state, userData) => {
    const { register } = state;

    if (register.length <= 0) {
        register.push(userData)
        localStorage.setItem('userData', JSON.stringify([...register]))
        state.content = '';
    } else {
        state.content = 'This account is registered!'
    }

    return {
        ...state,
    }

}


const signIn = (state, userData) => {
    const { register, userLog } = state;

    if (register.length <= 0) {
        state.userLogError.email.errorMessage = 'This email does not exist!';
        state.userLogError.email.errorStatus = true;
        state.userLogError.password.errorMessage = 'This password is incorrect!';
        state.userLogError.password.errorStatus = true;
    } else {
        state.userLogError.email.errorMessage = '';
        state.userLogError.email.errorStatus = false;
        state.userLogError.password.errorMessage = '';
        state.userLogError.password.errorStatus = false;
    }


    register.map((el) => {
        if ((el.email === userData.email) && (el.password === userData.password) && (userLog.length < 1)) {
            state.content = ''
            state.userLogStatus = true;
            userLog.push({
                name: el.name,
                surname: el.surname,
                email: el.email,
                password: el.password,
            })
            localStorage.setItem('userLog', JSON.stringify([...userLog]))
        }
        if (el.email !== userData.email) {
            state.userLogError.email.errorMessage = 'This email does not exist!';
            state.userLogError.email.errorStatus = true;
            state.userLogStatus = false;
        }
        if (el.password !== userData.password) {
            state.userLogError.password.errorMessage = 'This password is incorrect!';
            state.userLogError.password.errorStatus = true;
            state.userLogStatus = false;
        }
    })

    return {
        ...state,
    }
}

const logOut = (state, userData) => {
    userData.spile(0, 1)
    localStorage.setItem('UserLog', JSON.stringify(...userData))
    state.userLogStatus = false;

    return {
        ...state,
    }
}


export const SignStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return createUser(state, action.payload.userData)
        case SIGN_IN:
            return signIn(state, action.payload.userData)
        case LOG_OUT:
            return logOut(state, action.payload)
        case TEST:
            console.log("TASTE!!!!!!!!!!!!")
            return state
      default:
            return state
    }
}
