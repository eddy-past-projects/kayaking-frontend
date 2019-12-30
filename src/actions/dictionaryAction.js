export const fetchWords = () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://kayaks-backend-api.herokuapp.com/dictionaries'
  return dispatch => {
    dispatch({ type: 'LOADING_WORDS'})
    return fetch(proxyurl + url)
    .then(resp => resp.json())
    .then(words => {
      dispatch({ type: 'FETCH_WORDS', payload: words})
    })
  }
}
