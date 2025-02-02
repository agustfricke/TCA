import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Loader from "../utils/Loader";
import Message from "../utils/Message";
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConstants';


function UserEditScreen({ match, history }) {

    const userId = match.params.id

    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [is_admin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/users/admin')
        } else {
            if (!user.user_name || user.id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setUserName(user.user_name)
                setEmail(user.email)
                setPassword(user.password)
                setIsAdmin(user.is_admin)
            }
        }
    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            id: user.id, user_name, email, is_admin
        }))
    }

    return (
        <Container>
        <div className='mt-10'>
        <a
                            style={{ textDecoration: 'none' }}
                            href="/users/admin"
                            className="flex flex-row items-center text-gray-900 hover:text-gray-600 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Atras</p>
                        </a>
                <h1 className='text-center'>Edit User</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type='user_name'
                                    placeholder='Enter Username'
                                    value={user_name}
                                    onChange={(e) => setUserName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email' className='py-2'>
                                <Form.Label>Email Adress</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password' className='py-2'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='is_admin' className='py-2'>
                                <Form.Label>Is Admin</Form.Label>
                                <Form.Check
                                    type='checkbox'
                                    checked={is_admin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>

                            <div className='text-center py-2'>
                                <button type='submit'
                                className= 'bg-gray-700 py-3 px-5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2' >Submit</button>
                            </div>

                        </Form>
                    )}
        </div>
        </Container>
    )
}

export default UserEditScreen;
