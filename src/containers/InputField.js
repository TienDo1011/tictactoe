import { connect } from 'react-redux'
import InputField from '../components/InputField'

function getInput(state) {
    return state.input || '';
}

const mapStateToProps = (state) => {
  return {
    input: getInput(state)
  };
}

const InputFieldContainer = connect(mapStateToProps)(InputField)

export default InputFieldContainer
