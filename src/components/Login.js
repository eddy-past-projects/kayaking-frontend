import React from 'react'
import { connect } from 'react-redux'
import { updateLogInForm } from '../actions/logInAction'
import { login } from '../actions/usersAction'


const Login = ({ logInFormData, updateLogInForm, login, history }) => {

  const handleOnChange = (e) => {
    const {name, value} = e.target
    const updatedFormInfo = {...logInFormData, [name]: value}
    updateLogInForm(updatedFormInfo)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    login(logInFormData, history)
    history.push('/')
    // this.props.history.push('/');



  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <input value={logInFormData.name} name="name" type="text" placeholder="name" onChange={handleOnChange} autoComplete="off"/>
          </div>
          <div className="eight wide field">
            <input value={logInFormData.password} name="password" type="text" placeholder="password" onChange={handleOnChange} autoComplete="off"/>
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
  return {logInFormData: state.logIn}
}

export default connect(mapStateToProps, {updateLogInForm, login})(Login)
