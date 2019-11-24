import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class NavBar extends React.Component {


 

 render (){


  return (
    <div className='navBar'>

        <Link to='/'><Button>home</Button></Link>
        <Link to='/signup'><Button>sign up</Button></Link>
        <Link to='/login'><Button>log in</Button></Link>
        <Link to='/newtrip'><Button >new trips</Button></Link>
      <Link to='/mytrips'><Button >my trips</Button></Link>
      <Link to='/dictionary'><Button >dictionary</Button></Link>
        <Link to='/logout'><Button >log out</Button></Link>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
}



export default NavBar
