import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listCursoDetails, createCursoReview } from '../../actions/cursoActions'
import { CURSO_CREATE_REVIEW_RESET } from '../../constants/cursoConstants'
import { Row, Col, ListGroup, Form } from 'react-bootstrap'



const SoloCursoPagado = ({ match, history }) => {


    const dispatch = useDispatch()

    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {

        dispatch(listCursoDetails(match.params.id))

    }, [dispatch, match])


    return (
        <div>
            <div className="flex justify-center items-center mb-10">
                <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                    <div className="flex flex-col justify-start items-start w-full space-y-9">
                        <div className="flex justify-start flex-col items-start space-y-2">
                            <a 
                            href="/"
                            className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                                <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm leading-none">Back</p>
                            </a>

                        </div>

                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 ">
                            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="flex flex-col justify-start items-start w-full space-y-4">
                                    <p className="text-xl md:text-2xl leading-normal text-gray-800">{curso.name}</p>
                                    <p className="text-base font-semibold leading-none text-gray-600">{curso.price} ETH</p>
                                </div>
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                    <img 
                                    src={`http://127.0.0.1:8000${curso.image}`}
                                    alt="headphones" />
                                </div>
                            </div>

                            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

                             

                                <div className='py-10' >
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{curso.description}</p>
                                    </div>
                                </div>

                                <tbody>
                                {curso.episodios && curso.episodios.map((epi) => (


                                    <tr key={epi.id}>
                                        <td><img
                                            style={{ maxHeight: "50px" }}
                                            src={`http://127.0.0.1:8000${epi.image}`}
                                            alt=""
                                        /></td>

                                        <td>{epi.title}</td>

                                        
                                        <td className='text-center'>

                                           

                                            <a href={`/#/solo/epi/p/${epi.id}/${curso.id}`}>

                                            <button
                                            className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2'

                                            >
                                                Ver

                                            </button>
                                            </a>
                                            
                                        </td>
                                    </tr>
                                ))}


                            </tbody>

                               


                            </div>
                        </div>
                    </div>
                </div>

            </div>

                            
        </div>
                
            

    );
};

export default SoloCursoPagado;