import { createContext, useEffect, useReducer } from "react"

export const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    regUser: false
}; 
export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "LOGIN_START":
                    return ({
                        user: null,
                        isFetching: true,
                        error: false
                    })
                case "LOGIN_SUCCESS":
                    return ({
                        user: action.payload,
                        isFetching: false,
                        error: false
                    })
                case "LOGIN_FAILURE":
                    return ({
                        user: null,
                        isFetching: false,
                        error: true
                    })
                case "LOGOUT":
                    return ({
                        user: null,
                        isFetching: false,
                        error: false
                    })
                case "REGISTERING_START":
                    return ({
                        user: null,
                        isFetching: false,
                        error: false,
                        regUser: true
                    })
                case "REGISTERING_FAILURE":
                    return ({
                        user: null,
                        isFetching: false,
                        error: false,
                        regUser: false
                    })
                default:
                    return (state)
            }
        }
        , INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            regUser: state.regUser
        }}>
            {children}
        </Context.Provider>
    )
}