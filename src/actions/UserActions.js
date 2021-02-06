



export const UserLoggingIn = ({ email, uid, displayName, photoURL }) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payLoad: {
            user: { email, uid, displayName, photoURL }
        }
    })
}



export const UserLoggingOut = () => (dispatch) => {
    dispatch({
        type: "LOGOUT",
        payLoad: {
            user: null
        }
    })
}