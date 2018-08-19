import { connect } from 'react-redux'
import GifList from '../gif_list/GifList'

const mapStateToProps = gifs => ({
  gifs: gifs
})

export default connect(
  mapStateToProps,
  null
)(GifList)

