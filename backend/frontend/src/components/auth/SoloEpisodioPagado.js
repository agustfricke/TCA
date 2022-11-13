import React, { useState, useEffect } from "react";
import Message from '../utils/Message';
import Loader from '../utils/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listEpisodioDetails, createCommentEpisodio, listEpisodios } from '../../actions/cursoActions'
import { EPISODIO_CREATE_COMMENT_RESET } from '../../constants/cursoConstants'
import { Row, Col, ListGroup, Form } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import SoloCursoPagado from "./SoloCursoPagado";

// Render a YouTube video player



const SoloEpisodioPagado = ({ match, history }) => {

    const [description, setDescription] = useState('')

    const createComment = useSelector(state => state.createComment)
    const { loading: loadingEpisodioComment, error: errorEpisodioComment, success: successEpisodioComment} = createComment


    const dispatch = useDispatch()

    const episodioDetails = useSelector(state => state.episodioDetails)
    const { loading, error, episodio } = episodioDetails

    const episodioAll = useSelector(state => state.episodioAll)
    const { episodios } = episodioAll




    useEffect(() => {
        if (successEpisodioComment) {
            setDescription('')
            dispatch({ type: EPISODIO_CREATE_COMMENT_RESET })
        }
       
        dispatch(listEpisodioDetails(match.params.id))
        dispatch(listEpisodios(match.params.id))


    }, [dispatch, match, successEpisodioComment])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCommentEpisodio(
            match.params.id, {
            description
        }
        ))
    }



    return (
        <div>
            <div className="flex justify-center items-center">
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
            {episodios.map((epi) => (
                <div>
                {epi.curso === episodio.curso ? (



                    <tr key={epi.id}>

                    <a href={`/solo/epi/p/${epi.id}/${epi.curso}`}> {epi.id} {episodio.id}

                {epi.id === episodio.id ? (

                    <>

                        <td><img
                        style={{ maxHeight: "50px" }}
                        src={`http://127.0.0.1:8000${episodio.image}`}
                        alt=""
                    /></td>
                    <p>Curso que estas viendo</p>
                    
                    </>

                ) : (

                    <>

                        <td><img
                        style={{ maxHeight: "50px" }}
                        src={`http://127.0.0.1:8000${episodio.image}`}
                        alt=""
                    /></td>
                    
                    
                    </>

                )}
                    

                    
                    </a>
                    


                    
                    <td className='text-center'>    
                        
                    </td>
                </tr>



                ) : (




<>
</>




                )}


</div>
                                        
                                        ))}
                                                                        </div>
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                
                                </div>
                            </div>

                            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

                                <ReactPlayer url={`http://127.0.0.1:8000${episodio.video}`} controls fallback/>
                               

                                <div className='py-10' >
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{episodio.title}</p>
                                        <a href={`http://127.0.0.1:8000${episodio.file}`}>
                                            Ver y Descargar resumen en PDF <br></br>
                                        </a>
                                    </div>
                                </div>

                                <form onSubmit={submitHandler}
                                    >
                                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                </div>
                                            </div>

                                            <div>

                                                <div className="mt-1">
                                                    <textarea
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                        type="text"
                                                        id="body"
                                                        rows={3}
                                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Type Here!"
                                                    />
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type='submit'
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Commentar
                                            </button>
                                        </div>

                                    </form>

                                {episodio.comments && episodio.comments.map((comment) => (
                                    <>
                                    
                                    <p>{comment.description}</p>
                                    </>

                                    ))}


                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
                
            

    );
};

export default SoloEpisodioPagado;