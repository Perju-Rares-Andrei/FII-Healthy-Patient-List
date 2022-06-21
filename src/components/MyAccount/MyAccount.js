import React from 'react';
import './MyAccount.css';

const MyAccount = (props) => {
    return (
        <div className="my-account-button">
            {props.children}
        </div>
    );
}

export default MyAccount;