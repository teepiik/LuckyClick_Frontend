import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menubar = (props) => {
    return(
        <div>
            <Navbar collapseOnSelect expand='md'>
                <Navbar.Toggle aira-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#' as='span'>
                            <Link className='link' to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link href='#' as='span'>
                            <Link className='link' to='/game'>Game</Link>
                        </Nav.Link>
                        <Nav.Link href='#' as='span'>
                            {props.user
                                ? <Link className='link' to='/logout'>Logout</Link> :
                                <Link className='link' to='/login'>Login</Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menubar