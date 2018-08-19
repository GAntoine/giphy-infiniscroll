const limit = 25;
let page = 0;

export function fetchGifs() {
  return dispatch => {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=WhxxyqBSKtuGtsijYPrE7FdTTekZzi2p&limit=${limit}&offset=${page * limit}&rating=G`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const gifs = json.data.map((gif) => {
          return {
            id: gif.id,
            username: gif.username,
            url: gif.images.original.url,
          }
        })
        dispatch(fetchSuccess(gifs));
        return gifs;
      })
      .finally(() => page++)
  }
}

export const fetchSuccess = gifs => ({
  type: 'FETCH_SUCCESS',
  gifs: gifs
});

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}
