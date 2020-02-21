import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../actions/tripsAction'
// import {DateInput} from 'semantic-ui-calendar-react';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

class TripForm extends React.Component {

  state = {
    name: '',
    water_type: "",
    startDate: new Date(),
    endDate: new Date()
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addTrip(this.state)
    this.setState({name: '', water_type: ''})
    this.props.history.push('/');
  }

  // handleOnChange = (e, {name, value}) => {
  //   if (this.state.hasOwnProperty(name)) {
  //     this.setState({[name]: value});
  //   }
  // }

  // handleOnChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   }

  handleWhenChange = (date) => {
    this.setState({
        startDate: date,
      });
    };

  handleOnChange = (date) => {
    this.setState({
        // startDate: date,
        endDate: date
      });
    };

  handleIfChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.startDate)
    // console.log('tripform')
    return (<div>
      <h4>add a trip!</h4>
      <form onSubmit={this.handleOnSubmit}>
        <div className="ui form">
          <div className="fields">
            <div className="five wide field">
              <input onChange={this.handleIfChange} value={this.state.name} type="text" name="name" placeholder="name" dateformat="MM/DD/YYYY" autoComplete="off"/><br/>
            </div>
            <div className="three wide field">
              <label>water type
                <select onChange={this.handleIfChange} value={this.state.water_type} type="text" name="water_type" dateformat="MM/DD/YYYY" placeholder="water type" autoComplete="off">
                  <option value='select'>select below</option>
                  <option value="bay">bay</option>
                  <option value="lake">lake</option>
                  <option value="ocean">ocean</option>
                  <option value="river">river</option>
                </select>
              </label>
            </div>
            <div className="three wide field">
              <DatePicker selected={this.state.startDate} onChange={this.handleWhenChange}  autoComplete="off"/>
            </div>





            <div className="three wide field">
              <DatePicker selected={this.state.endDate} onChange={this.handleOnChange} autoComplete="off"/>
            </div>
            <div className="two wide field">
              <button type="submit" className="ui button">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>)
  }

}

export default connect(null, {addTrip, DatePicker})(TripForm)

// <DatePicker onChange={this.handleOnChange} type={this.DateInput} value={this.state.start_date} animation='off' iconPosition="left" name="start_date" placeholder="start date" autoComplete="off"/>