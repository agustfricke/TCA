import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from './CheckoutSteps'
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

function PaymentScreen({history}) {

    const cart = useSelector(state => state.cart) 

    const dispatch = useDispatch()


    const checkoutHandler = () => {
        history.push('/placeorder')
      }

    return (
        <>
            <CheckoutSteps step1 step2 step3/>



<div class=" flex-initial w-85   max-w-screen-md gap-10 sm:mx-auto">
          <div>
            <div class="p-8 bg-gray-900 rounded">
              <div class="mb-4 text-center">
                <p class="text-xl font-medium tracking-wide text-gray-200">
                  SUBSCRIPCION
                </p>
                <div class="flex items-center justify-center">
                  <p class="mr-2 text-5xl font-semibold text-gray-200 lg:text-6xl">
                    $59,99
                  </p>
                </div>
              </div>
              <div className='flex justify-center mr-9'>
                
              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">700 horas de contentido</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Frontend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Backend</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Proyectos Full Stack</p>
                </li>
              </ul>
              </div>

              <div>
              <ul class="mb-8 space-y-2">
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Desarrollo Blockchain</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Hacking Etico</p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Soporte </p>
                </li>
                <li class="flex items-center">
                  <div class="mr-3">
                    <svg
                      class="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p class="font-medium text-gray-300">Nuevos cursos todos los meses</p>
                </li>
              </ul>
              </div>



              </div>
              <center>

              <PayPalScriptProvider
                options={{
                    "client-id": "AagP4ONe8aPmVkKC1TiFz8QxceRQEMlyxFILAR84-Ws9X0NwRtwFOrAfx-dcprZ2Cy3R1txtYErnHpI8",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
            checkoutHandler();
          }}
        />
			</PayPalScriptProvider>
              <button onClick={checkoutHandler} 
                                        type="submit"
                                        className="mt-2 items-center   border border-transparent bg-gray-700 py-3 px-8 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        PAGAR
                                    </button>
                                    </center>
            </div>
            <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
            <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
            <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
          </div>
         
          </div>

            
            </>
    )
}

export default PaymentScreen;
