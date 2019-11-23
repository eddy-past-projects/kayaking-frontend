import React from 'react'
import { connect } from 'react-redux'
import Trips from '../components/Trips'
import { deleteTrip } from '../actions/tripsAction'
import { fetchTrips } from '../actions/tripsAction'




class TripsContainer extends React.Component {
  //
  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate', this.props.trips.trips.length)
    if (this.props.trips.trips.length > prevProps.trips.trips.length) {
      this.props.fetchTrips(this.props.trips.trips);
    }
  }
  componentDidMount(){
    // console.log('componentDidMount')
    this.props.fetchTrips()
  }


  render () {
    return (
        <div>
          <Trips trips={this.props.trips} deleteTrip={this.props.deleteTrip} />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {trips: state.trips}
}

export default connect(mapStateToProps, {fetchTrips, deleteTrip})(TripsContainer)
