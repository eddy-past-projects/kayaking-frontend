import React, { PureComponent } from 'react'
import { Grid, Image } from 'semantic-ui-react'


class HomeGrid extends PureComponent {
  constructor(props){
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

  render(){

    let isMobile
    const width = this.state.width
    width <= 500 ? isMobile = true : isMobile = false

    let column =
    <Grid.Column>
      <Image src={this.props.image} />
    </Grid.Column>

    //style grid for mobile
    let row
    let numberOfColumns
    if (isMobile) {
      numberOfColumns =2
      row =
        <Grid.Row>
          {column}
          {column}
        </Grid.Row>
    } else {
      numberOfColumns = 4
      row =
        <Grid.Row>
          {column}
          {column}
          {column}
          {column}
        </Grid.Row>
    }



    return(
      <>
        <Grid columns={numberOfColumns} divided>
          {row}
          {row}
          {row}
          {row}
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
      </>
    )
}
}


export default HomeGrid
