export const fetchComments = () => {
  // console.log('fetchcomments')
  return dispatch => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://kayaks-backend-api.herokuapp.com/comments'
    dispatch({ type: 'LOADING_COMMENTS'})
    return fetch(proxyurl + url)

    .then(resp => resp.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
  }
}


export const addComment = comment => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://kayaks-backend-api.herokuapp.com/comments'

  // console.log('addComment', comment)
  return dispatch => {

    return fetch(proxyurl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment),
    })
    .then(resp => resp.json())
    // .then(console.log)
    .then(comment => {
      // console.log(comment)

      dispatch({ type: 'ADD_COMMENT', comment})
    });
  }

}


export const deleteComment = id => {
  // console.log('deleteComment', id)
  return dispatch => {
    dispatch({ type: 'DELETE_COMMENT', id})
    return fetch(`https://kayaks-backend-api.herokuapp.com/comments/${id}`,{
      method: 'DELETE'
    })
  }
}
