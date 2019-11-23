import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


class NavBar extends React.Component {

  constructor(props) {
   super()

   this.state = {
     width: window.innerWidth
   }
 }

 componentDidMount() {
   window.addEventListener('resize', this.handleWindowSizeChange);
 }

 componentWillUnmount() {
   window.removeEventListener('resize', this.handleWindowSizeChange);
 }

 handleWindowSizeChange = () => {
   this.setState({ width: window.innerWidth });
 }

 render (){


  return (
    <div className='navBar'>
      <Button.Group size='large'>
        <Link to='/'><Button >home</Button></Link>
        <Link to='/signup'><Button >sign up</Button></Link>
        <Link to='/login'><Button >log in</Button></Link>
        <Link to='/newtrip'><Button>new trips</Button></Link>
      <Link to='/mytrips'><Button>my trips</Button></Link>
      <Link to='/dictionary'><Button>dictionary</Button></Link>
        <Link to='/logout'><Button>log out</Button></Link>
      </Button.Group>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
}



export default NavBar
