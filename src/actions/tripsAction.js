// synchronous action
export const setMyTrips = trips => {
  return {
    type: "SET_MY_TRIPS",
    trips
  }
}

export const clearMyTrips = () => {
  return {
    type: "CLEAR_MY_TRIPS",
  }
}

// async actions
export const fetchTrips = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_TRIPS'})
    return fetch('https://kayaks-backend-api.herokuapp.com/trips')

    .then(resp => resp.json())
    // .then(console.log)
    .then(trips => {
      dispatch({ type: 'FETCH_TRIPS', payload: trips })});
  }
}





// export const fetchTrips = () => {
//   return dispatch => {
//     dispatch({ type: 'LOADING_TRIPS'})
//     return fetch('https://kayaks-backend-api.herokuapp.com/trips',{
//       method: 'GET',
//                  body: JSON.stringify(),
//                  // mode: 'no-cors',
//                  credentials: "same-origin", //include, same-origin
//                  headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
//              })
//
//
//
//     .then(resp => resp.json())
//     // .then(console.log)
//     .then(trips => {
//       dispatch({ type: 'FETCH_TRIPS', payload: trips })});
//     }
//   }



// fetch("https://example.com/api/request", {
//             method: 'POST',
//             body: JSON.stringify(data),
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Accept": 'application/json',
// export const addLiketoTrip = (tripId, tripLike) => {
//   tripLike++
//   return dispatch => {
//     return fetch(`https://kayaks-backend-api.herokuapp.com/${tripId}`,{
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'      },
//       body: JSON.stringify({like: tripLike}),
//     })
//     .then(resp => resp.json())
//     .then(trip => {
//       // console.log(tripLike)
//       dispatch({type:"TRIP_LIKE", trip})
//     })
//   }
// }


export const addTrip = trip => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://kayaks-backend-api.herokuapp.com/trips'
  console.log('addTrip', trip)
  return dispatch => {
    return fetch(proxyurl + url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'      },
      body: JSON.stringify(trip),
    })
    .then(resp => resp.json())
    .then(trip => {
      (console.log('add trip',trip))
      dispatch({type:'ADD_TRIP', trip:trip})
    })
  }
}

export const deleteTrip = id => {
  console.log('deleteTrip', id)
  return dispatch => {
    dispatch({ type: 'DELETE_TRIP', id})
    fetch(`https://kayaks-backend-api.herokuapp.com/trips/${id}`,{
      method: 'DELETE'
    })
  }
}

// export const getCommentForTrip = id => {
//   return dispatch => {
//     return fetch(`http://localhost:3000/trips/${id}`)
//     .then(resp => resp.json())
//     .then(comment)
//   }
//
// }


export const getMyTrips = id => {
    return dispatch => {
        dispatch({ type: 'SET_MY_TRIPS'})
        return fetch(`https://kayaks-backend-api.herokuapp.com/trips/${id}`,{
            method: 'GET',
          })
          .then(resp => resp.json())
          .then(resp => {
              dispatch(setMyTrips())
            })
          }
        }
