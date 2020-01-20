import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = ({ handleLogin }) => {
    return (
        <div>
            <h2>Please log in to play the Lucky Click.</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        type='text'
                        name='username'
                    />
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                    />
                    <Button variant='primary' type='submit'>
                        login
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login