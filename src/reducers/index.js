const gifs = (state = [], { type, gifs }) => {
  switch (type) {
    case 'FETCH_SUCCESS':
      return [...state, ...gifs]
    default:
      return state
  }
}

export default gifs
