import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/usersAction'

const Logout = ({ logout, history}) => {

  const handleOnSubmit = (e) => {
    e.preventDefault()
    logout(history)
    history.push('/');
  }

  return (
    <form onSubmit={handleOnSubmit}>
<div className="two wide field">

  <button type="submit" className="ui button">Log out</button>
</div>
    </form>
  )
}

export default connect(null, {logout})(Logout)
