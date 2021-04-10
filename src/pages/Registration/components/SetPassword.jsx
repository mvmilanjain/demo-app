const SetPassword = props => {
    return (
        <div>
            <div>SetPassword</div>
            <div>
                <label>Set Password</label>
                <input type="text"/>
            </div>

            <div>
                <label>Confirm Password</label>
                <input type="text"/>
            </div>

            <button onClick={props.onConfirm}>Enter Details</button>
        </div>
    );
}

export default SetPassword;
