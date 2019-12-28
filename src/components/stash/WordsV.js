import React from 'react'
import Word from './Word'
import {Card} from 'semantic-ui-react'

class Words extends React.Component {



    renderWords (words){
      return words.map((word) => <Word key={word.id} word={word}/>)
    }

    render() {



    return (
      <Card.Group itemsPerRow={4}>
        {this.renderWords(this.props.words)}
    </Card.Group >)
  }
}

export default Words
