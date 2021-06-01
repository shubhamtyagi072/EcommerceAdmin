import { LOGIN, LOGOUT } from '../types'  

const initialState = {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user')
}

export const userReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token,
                data: action.payload,
                login: action.login
                // token: "hjkgd",
                // data: "aniket",
                // login: true
            }
        case LOGOUT:
            return {
                token: action.token,
                data: action.payload,
                login: action.login
            }
        default:
            return state
    }
}
