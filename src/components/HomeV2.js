import React, { PureComponent } from 'react';
import TripsContainer from '../containers/TripsContainer'
import { Container } from 'semantic-ui-react'
import HomeGrid from './HomeGrid'






class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
     }
   }

  componentDidMount() {
     window.addEventListener('resize', this.handleWindowSizeChange)
   }

  componentWillUnmount() {
     window.removeEventListener('resize', this.handleWindowSizeChange)
   }

  handleWindowSizeChange = () => {
     this.setState({ width: window.innerWidth })
   }

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false


    // intro font size
    let style
    if (isMobile) {
      style = "ui block header home intro mobile"
    } else {
      style = "ui block header home intro desktop"
    }


    return (
      <Container className="center">

      <div className={style}>
        <TripsContainer />
      </div>
    <HomeGrid/>
    </Container>

    )
}
}

export default Home
