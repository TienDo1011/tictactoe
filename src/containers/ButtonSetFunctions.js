import { showMemories, clear, undo } from '../actions/index'
import { connect } from 'react-redux'
import ButtonSetFunctions from '../components/ButtonSetFunctions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleRecal: () => {
      dispatch(showMemories());
    },
    handleClear: () => {
      dispatch(clear());
    },
    handleBack: () => {
      dispatch(undo());
    }
  }
}

const ButtonSetFunctionsContainer = connect(null, mapDispatchToProps)(ButtonSetFunctions)

export default ButtonSetFunctionsContainer
