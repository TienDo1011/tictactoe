import { addOperation, calculate } from '../actions/index'
import { connect } from 'react-redux'
import ButtonSetEquations from '../components/ButtonSetEquations'

const mapStateToProps = (state) => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (e) => {
      dispatch(addOperation(e.target.textContent));
    },
    handleFunc: (input) => {
      dispatch(calculate(input))
    }
  }
}

const ButtonSetEquationsContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonSetEquations)

export default ButtonSetEquationsContainer
