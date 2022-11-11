import React, { useState, useEffect } from 'react';

import { listMyOrders } from '../../actions/orderActions';
import { listCursos } from "../../actions/cursoActions";
import { useDispatch, useSelector } from 'react-redux'



export default function MiPerfil() {


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const orderListMy = useSelector(state => state.orderListMy)
  const { orders } = orderListMy

  const cursoList = useSelector((state) => state.cursoList);
  const { error, loading, cursos } = cursoList;

  const dispatch = useDispatch()

  useEffect(() => {      
    dispatch(listMyOrders())
    dispatch(listCursos())
    }, [dispatch])



  return (
    <>

      <div>
        <div>
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="mt-6">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                tu cuenta personal
              </h2>
             
              <div>
                <center>
                  <img className="h-40 w-55 rounded-full" src={`http://127.0.0.1:8000${userInfo.image}`} alt="" />
                  <br></br>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{userInfo.user_name} &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style={{ textDecoration: 'none' }}
                      href={"/#/editprofile"}
                      className=" bg-indigo-600 py-1 px-5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      EDIT
                    </a>
                  </h3>
                </center>
              </div>
            </div>

            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.user_name}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{userInfo.email}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {userInfo.bio}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-white">
        <h1 className=" font-bold tracking-tight  mt-9 text-gray-900 sm:text-3xl ">
          <center>
            <span className="block xl:inline">tus </span>{' '}
            <span className="block text-indigo-600 xl:inline">cursos</span>
          </center>
        </h1>
        {orders && orders.map(order => (
          <>



        <div key={order.id} className="mx-auto max-w-2xl py-10  sm:px-2 lg:max-w-7xl lg:px-4">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cursos.map((curso) => (


            <div key={curso.id} className="group relative">
            <h3 className="text-sm text-gray-700">
            {order.order_items && order.order_items.map((item) => (

              <>

              {curso.title === item.curso ? (

                <>
              <div className='mb-8'>
                <img
                  src={`http://127.0.0.1:8000${curso.image}`}

                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <a href={`/#/solo/curso/${curso.id}`}>
                {curso.title}

                </a>
                </div>

                </>   

                   ) : (

                        <>

                      

                      </>

                    )}

                      </>

                      ))}
                    </h3>
              
              
            </div>
            ))}
          </div>
        </div>

        </>
            ))}
      </div>
    </>
  )
}