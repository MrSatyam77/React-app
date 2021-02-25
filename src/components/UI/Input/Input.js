import React from 'react';
import './Input.css';
const input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = ["InputElement"];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid');
        validationError=<p>{props.errorMessage}</p>;
    }
    switch (props.elementtype) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed} value={props.value}></input>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed} value={props.value}></textarea>;
            break;
        case ('select'):
            inputElement = <select className={inputClasses.join(' ')} onChange={props.changed} value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayName}</option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed} value={props.value}></input>;
            break;
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};
export default input;