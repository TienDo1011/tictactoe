import React, {Component} from 'react'

class InputField extends Component {
    render() {
        return (
          <input className="editable-field" type="text" value={this.props.input} />
        )
    }
}

export default InputField
