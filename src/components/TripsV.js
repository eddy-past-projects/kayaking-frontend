import React from 'react';
import Trip from './Trip';
import { Card } from 'semantic-ui-react'



class Trips extends React.Component {



 renderTrips (trips) {
   const tripSort = trips.sort((a, b) => {
     if (a.start_date < b.start_date) {return 1}
     if (a.start_date > b.start_date) {return -1}
     return 0

   })
   return tripSort.map((trip, idx) =>
     <Trip key={idx} trip={trip} deleteTrip={this.props.deleteTrip}/>
   )
 }

  render () {



    return (

      <Card.Group itemsPerRow={4}>
        {this.renderTrips(this.props.trips.trips)}
      </Card.Group>
    )
  }
}


export default Trips
