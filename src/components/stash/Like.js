import React from 'react'

class Like extends React.Component {

  state = {
    count: 0
  }

  incrementLike = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <div >
        <button onClick={this.incrementLike}>like {this.state.count}
        </button>

      </div>
    )
  }



}
export default Like
