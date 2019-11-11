import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUpAction'
import { signup } from '../actions/usersAction'

const Signup = ({ signUpFormData, updateSignUpForm, signup,  history }) => {


  const handleOnChange = (e) => {
    const {name, value} = e.target
    const updatedFormInfo = {...signUpFormData, [name]: value}
    updateSignUpForm(updatedFormInfo)
  }


  const handleOnSubmit = (e) => {
    e.preventDefault()
    signup(signUpFormData, history)
    history.push('/');

  }

  return (

    <form onSubmit={handleOnSubmit}>
      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <input value={signUpFormData.name} name="name" type="text" placeholder='name' onChange={handleOnChange} />
          </div>
          <div className="six wide field">
            <input value={signUpFormData.password} name="password" type="text" placeholder='password' onChange={handleOnChange} />
          </div>
          <div className="two wide field">
            <button type="submit" className="ui button">Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {signUpFormData: state.signUp}
}

export default connect(mapStateToProps, {updateSignUpForm, signup})(Signup)
