import { resetLogInForm } from './logInAction'
import { resetSignUpForm } from './signUpAction'
import { setMyTrips } from './tripsAction'
import { clearMyTrips } from './tripsAction'


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
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
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
          dispatch(setMyTrips())
        }
      })
      .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearMyTrips())
   return fetch('http://localhost:3000/logout', {
      // credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/get_current_user", {
        method: "GET",
        headers: {
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
          dispatch(setMyTrips())
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
    return fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
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
          console.log('signup resp', resp)

        }
      })
      .catch(console.log)
  }
}
