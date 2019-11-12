import React from 'react'
import { Card } from 'semantic-ui-react'



const Word = ({word}) => {

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {word.name}
        </Card.Header>
        <Card.Description>
          <h4>
            {word.description}<br />
        </h4>
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default Word
