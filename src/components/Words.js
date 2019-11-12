import React from 'react'
import Word from './Word'
import { Card } from 'semantic-ui-react'







  const Words = ({words}) => {

    return (
      <Card.Group itemsPerRow={4}>
    {words.map(word => <Word key={word.id} word={word} />)}
     </Card.Group >
    )
  }

  export default Words
