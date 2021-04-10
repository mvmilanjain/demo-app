import {useState} from "react";

const EnterDetails = props => {
    const {translation, onConfirm} = props;
    const [state, setState] = useState({email: '', name: '', phoneNo: ''});
    const updateState = (fieldName, value) => {
        setState({...state, [fieldName]: value});
    }

    return (
        <div>
            <div>Create Account</div>
            <div>
                <label>{translation?.email}</label>
                <input
                    type="text"
                    value={state.email}
                    onChange={e => updateState('email', e.target.value)}
                />
            </div>

            <div>
                <label>{translation?.name}</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={e => updateState('name', e.target.value)}
                />
            </div>

            <div>
                <label>{translation?.phoneNo}</label>
                <input
                    type="text"
                    value={state.phoneNo}
                    onChange={e => updateState('phoneNo', e.target.value)}
                />
            </div>

            <button onClick={() => onConfirm(state)}>Enter Details</button>
        </div>
    );
}

export default EnterDetails;
