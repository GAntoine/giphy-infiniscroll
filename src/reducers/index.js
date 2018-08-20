let initialState = [[], [], [], []]

const gifs = (state = initialState, { type, gifs }) => {
  switch (type) {
    case 'FETCH_SUCCESS':
      return state.map((column, i) => column.concat(gifs[i]))
    default:
      return state
  }
}

export default gifs
