import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import { getCurrentUser } from './actions/usersAction'
import { Container } from 'semantic-ui-react'
import Signup from './components/Signup'






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



          </Container>
        </div>
    );
  }
}


export default connect(null, { getCurrentUser })(App) ;
