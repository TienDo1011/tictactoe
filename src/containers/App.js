import React, { Component } from 'react';
import { Provider } from 'react-redux'

// Import all components
import InputFieldContainer from './InputField'
import TotalRecallContainer from './TotalRecall'
import ButtonSetNumbersContainer from './ButtonSetNumbers'
import ButtonSetFunctionsContainer from './ButtonSetFunctions'
import ButtonSetEquationsContainer from './ButtonSetEquations'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <main className="react-calculator">
          <InputFieldContainer />
          <TotalRecallContainer />
          <ButtonSetNumbersContainer />
          <ButtonSetFunctionsContainer />
          <ButtonSetEquationsContainer />
        </main>
      </Provider>
    )
  }
}

export default App;
