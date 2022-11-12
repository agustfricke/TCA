import React from 'react';
import { Nav } from 'react-bootstrap'


function CheckoutSteps({ step1, step2, step3 }) {


    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <a to='/login'>
                        <Nav.Link>Login</Nav.Link>
                    </a>
                ): (
                    <Nav.Link disabled>Login</Nav.Link>
                )}
            </Nav.Item>


            <Nav.Item>
                {step2 ? (
                    <a to='/payment'>
                        <Nav.Link>Payment</Nav.Link>
                    </a>
                ): (
                    <Nav.Link disabled>Payment</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <a to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </a>
                ): (
                    <Nav.Link disabled>Place Order</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps;