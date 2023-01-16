const initialState = {
    loading: false,
    user: {
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
    },
    error: ''
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                error: 'none'

            }
        case SIGN_UP:
            return {
                ...state,
                user: {
                    username: action.payload.user.username
                }
            }
        case LOGOUT:
            return {}


        default:
            break;
    }
}