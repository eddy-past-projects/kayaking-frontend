import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import { getCurrentUser } from './actions/usersAction'
import { Container } from 'semantic-ui-react'
import Signup from './components/Signup'
import { Route, Switch, withRouter } from 'react-router-dom'
import { logout } from './actions/usersAction'
import NavBar from './components/NavBar'
import { getMyTrips } from './actions/tripsAction'
import Home from './components/Home'











class App extends React.Component {

componentDidMount(){
  this.props.getCurrentUser()
}

  render() {
    return (
        <div className='App'>
          <Container>
            <div id='main_head'>
              <h1>come on kayak</h1>
            </div>
            <NavBar />
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/logout' component={logout} />
                <Route path='/mytrips' render={getMyTrips}/>






          </Container>
        </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App) ;
