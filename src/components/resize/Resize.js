import React from 'react';




class Resize extends React.Component {


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

  render () {

    console.log(this.state)
    let isMobile
let width = this.state.width
width <= 500 ? isMobile = true : isMobile = false

let isTablet
 width = this.state.width
width <= 900 ? isTablet = true : isTablet = false

let isLaptop
 width = this.state.width
width <= 1200 ? isLaptop = true : isLaptop = false

let isDesktop
width = this.state.width
width <=1800 ? isDesktop = true : isDesktop = false


let itemsPerRow
if(isMobile){
  itemsPerRow = 1
} else if(isTablet){
  itemsPerRow = 2
} else if(isLaptop){
  itemsPerRow = 3
} else if(isDesktop){
  itemsPerRow = 4
}

    return (
      <div className='resize'>
      
      </div>

    )
  }
}


export default Resize
