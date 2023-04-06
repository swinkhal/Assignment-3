import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@mui/material';


const UserForm = (props) => {
    const [user, setUser] = useState({
        username: props.user ? props.user.username : '',
        description: props.user ? props.user.description : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { username, description } = user;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [username, description];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const user = {
                id: uuidv4(),
                username,
                description
            };
            props.handleOnSubmit(user);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="main-form">
            <div>
                <div className="mb-1">
                    Image <span className="font-css top">*</span>
                    <div className="">
                        <input type="file" id="file-input" name="ImageStyle" />
                    </div>
                </div>
            </div>
            <h1>Edit blog</h1>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <form onSubmit={handleOnSubmit}>
                <TextField
                    id="name"
                    label="User Name"
                    variant="outlined"
                    className="input-control"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter name of user"
                    onChange={handleInputChange}
                />
                <TextField
                    id="author"
                    label="Description"
                    variant="outlined"
                    className="input-control"
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Add description"
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="submit-btn"
                    style={{ marginTop: '1rem' }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default UserForm;
