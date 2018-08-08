import React, {Component} from 'react';


class RegistrationField extends Component {

    render() {
        const {spanText, state, placeholderValue, t, updateFunction, placeholder, inputType} = this.props;
        return (
            <div>
                <span className="addNewUser__blockTitle">{spanText}</span>
                <input type={inputType} className="addNewUser__input"
                       value={state.value}
                       onChange={(evt) => updateFunction(evt)}
                       placeholder={
                           (
                               state.isChanged
                               && placeholder(state.value, t)
                           )
                           || placeholderValue
                       }
                />
            </div>
        )
    }
}
export default RegistrationField