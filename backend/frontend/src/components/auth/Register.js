import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../actions/userActions'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Message from '../utils/Message'
import Loader from '../utils/Loader'
import eth from '../../media/ethereum.png'


export default function Register({ location, history }) {

  const [first_name, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState('')
  const [re_password, setRePassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)
  const { error, loading, success } = userRegister


  useEffect(() => {
    if(success){
        history.push(redirect)
    }
}, [history, success, redirect])



  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== re_password) {
      setMessage('Passwords must match ')
    } else {
      dispatch(register(first_name, email, user_name, password, re_password))
    }
  }



  return (

    <>

      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}


      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={eth}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create an Account
            </h2>

          </div>
          <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="user_name" className="sr-only">
                  Username
                </label>
                <input
                  value={user_name}
                  onChange={(e) => setUserName(e.target.value)}
                  id="user_name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>

              <div>
                <label htmlFor="user_name" className="sr-only">
                  Username
                </label>
                <input
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Firstname"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="password" className="sr-only">
                  Repate Password
                </label>
                <input
                  value={re_password}
                  onChange={(e) => setRePassword(e.target.value)}
                  id="confirmPassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="text-sm">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Have an account? Click here!
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}