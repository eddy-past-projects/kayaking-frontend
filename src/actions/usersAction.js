import {
  resetLogInForm
} from './logInAction'
import {
  resetSignUpForm
} from './signUpAction'
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
  console.log('credentials', credentials)
  return dispatch => {
    return fetch("https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/login", {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': 'https://kayaks-backend-api.herokuapp.com/login',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log('login resp', resp)
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
    return fetch('https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/logout', {
      // credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/get_current_user", {
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
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
    return fetch("https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/signup", {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': 'https://kayaks-backend-api.herokuapp.com/signup',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log('signup resp', resp)
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
