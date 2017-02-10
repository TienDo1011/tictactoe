import { addNumber } from '../actions/index'
import { connect } from 'react-redux'
import ButtonSetNumbers from '../components/ButtonSetNumbers'

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (e) => {
      dispatch(addNumber(e.target.textContent));
    }
  }
}

const ButtonSetNumbersContainer = connect(null, mapDispatchToProps)(ButtonSetNumbers)

export default ButtonSetNumbersContainer
