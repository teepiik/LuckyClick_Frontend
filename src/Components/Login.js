import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = (props) => {
    return (
        <div>
            <h2>Please log in to play the Lucky Click.</h2>
            <Form onSubmit={props.handleLogin}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        type='text'
                        name='username'
                        value={props.username}
                        onChange={props.handleUsernameChange}
                    />
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        value={props.password}
                        onChange={props.handlePasswordChange}
                    />
                    <Button className='button' type='submit'>
                        login
                    </Button>
                </Form.Group>
            </Form>
            <p> You can also register new player <Link className='link' to='/register'>here</Link></p>
        </div>
    )
}

export default Login