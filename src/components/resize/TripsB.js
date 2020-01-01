import React from 'react';
import Trip from './Trip';
import { Card } from 'semantic-ui-react'
import Resize from './Resize'




class Trips extends React.Component {


  constructor(props) {
   super()


 }



 //  renderTrips (trips) {
 //   return trips.map((trip, index) =>
 //     <Trip key={trip.id} trip={trip} deleteTrip={this.props.deleteTrip}/>
 //   )
 // }
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
      <div>
        <Resize />
        <Card.Group >
          {this.renderTrips(this.props.trips.trips)}
        </Card.Group>

      </div>

    )
  }
}


export default Trips
