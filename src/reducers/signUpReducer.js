
const initialState = {
  name: '',
  password: ''
}

const signUp = (state = initialState, action) => {
  switch(action.type){

    case 'UPDATE_SIGNUP_FORM':
    return action.formData

    case 'RESET_SIGNUP_FORM':
    return initialState

    default:
    return state
  }

}
export default signUp
