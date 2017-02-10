import { toggleMemories } from '../actions/index'
import { connect } from 'react-redux'
import TotalRecall from '../components/TotalRecall'

const mapStateToProps = (state) => {
  return {
    memories: state.memories,
    memoriesVisible: state.memoriesVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch(toggleMemories());
    }
  }
}

const TotalRecallContainer = connect(mapStateToProps, mapDispatchToProps)(TotalRecall)

export default TotalRecallContainer
