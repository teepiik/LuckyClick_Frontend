import React from 'react'
import { Form, Button } from 'react-bootstrap'

const NewUserForm = (props) => {
    return (
        <div>
            <h2>Register new Player</h2>
            <Form onSubmit={props.handleNewUser}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        type='text'
                        name='username'
                        value={props.newUsername}
                        onChange={props.handleNewUsernameChange}
                    />
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        value={props.newPassword}
                        onChange={props.handleNewPasswordChange}
                    />
                    <Button className='button' type='submit'>
                        Register
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default NewUserForm