import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const NavBar = () => {

  return (
    <div>
      <Button.Group size='large'>
        <Link to='/'><Button >home</Button></Link>
        <Link to='/signup'><Button >sign up</Button></Link>
        <Link to='/login'><Button >log in</Button></Link>

        <Link to='/logout'><Button>log out</Button></Link>
      </Button.Group>
      <br/>
      <br/>
      <br/>
    </div>
  )
}



export default NavBar
