import { resetLogInForm } from './logInAction'
import { resetSignUpForm } from './signUpAction'
// import { setMyTrips} from './tripsAction'
// import { clearMyTrips } from './tripsAction'





// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = (credentials) => {
  return dispatch => {
    return fetch("https://kayaks-backend-api.herokuapp.com/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(resetLogInForm())
          // dispatch(setMyTrips())




        }
      })
      .catch(console.log)
  }
}


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    // dispatch(clearMyTrips())


    return fetch('https://kayaks-backend-api.herokuapp.com/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://kayaks-backend-api.herokuapp.com/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))

        }
      })
      .catch(console.log)
  }
}

export const signup = (credentials) => {
  console.log('signup', credentials)
  const userInfo = {
    user: credentials
  }
  return dispatch => {
    return fetch("https://kayaks-backend-api.herokuapp.com/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log('signup', resp)
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(resetSignUpForm())


        }
      })
      .catch(console.log)
  }
}