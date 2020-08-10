import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const backdrop = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: '250px',
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

function Model({ showModal, setShowModal, id, setId, name, setName }) {
    const onChangeHandler = (e) => {
        setName(e.target.value);
        console.log(name)
    }

    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/users', { name })
            .then(res => {
                console.log(res.data.id);
                setId(res.data.id);
                // setShowModal(false)
                // window.location.href = '/questions';
                history.push('/questions');
            })
            .catch(err => console.log(err));
            }
    console.log(id);
    return (

        <AnimatePresence exitBeforeEnter>
        {
            showModal && (<motion.div className="backdrop fixed top-0 left-0 z-10 w-full h-full bg-primary-800 "
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div className="modal max-w-lg px-4 py-2 bg-white rounded-full h-24 text-center container mx-auto"
                    variants={modal}
                >
                    <div className="flex justify-around">
                        <p className="text-gray-800 font-semibold">What is your name?</p>
                        <p className="cursor-pointer" onClick={() => setShowModal(false)}>x</p>
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="name">Name</label>
                        <input
                         type="text"
                         name="name" 
                         className="border-gray-800 rounded-full outline-none bg-red-300 mx-4 p-2"
                         onChange={onChangeHandler}    
                         />
                        <Link to="/questions">
                            <button onClick={onSubmitHandler} className="text-gray-800 font-semibold mt-2 bg-green-300 p-2 rounded-full">Start Game</button>
                        </Link>
                    </form>

                </motion.div>

            </motion.div>)
        }

        </AnimatePresence>
        
    )
}


export default Model;
