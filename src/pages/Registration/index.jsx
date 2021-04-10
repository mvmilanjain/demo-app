import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import EnterDetails from "./components/EnterDetails";
import SetPassword from "./components/SetPassword";
import {getTranslation} from "../../services/myService";

const Registration = props => {
    const [showSetPassword, setShowSetPassword] = useState(false);
    const [label, setLabel] = useState(null);

    useEffect(() => {
        getTranslation().then(res => {
            setLabel(res);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    const confirmDetails = (state) => {
        console.log({state});
        setShowSetPassword(true);
    }

    const confirmPassword = () => setShowSetPassword(false);

    return (
        <React.Fragment>
            {!showSetPassword && <EnterDetails onConfirm={confirmDetails} translation={label}/>}
            {showSetPassword && <SetPassword onConfirm={confirmPassword}/>}
        </React.Fragment>
    );
}

// Registration.propTypes = {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     phoneNumber: PropTypes.number
// }
//
// Registration.defaultProps = {
//     name: 'Registration'
// }

export default Registration;
