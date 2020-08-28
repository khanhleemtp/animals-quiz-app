import React, { useState, useEffect } from 'react'
import { questions } from '../datas';
import { motion, AnimatePresence } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import music from '../music1.mp3';
import { Redirect } from 'react-router-dom';

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 120
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' } 
    }
}


const btnVariants = {
    hover: {
        scale: 1.2,
        textShadow: '0px 0px 4px rgba(255, 255, 255)',
        boxShadow: '0px 0px 4px rgba(255, 255, 255)',
        transition: {
            duration: 0.1,
            delay: 0.2,
            yoyo: Infinity,
        }
     },
     exit: {
        x: '-200vw',
        transition: { ease: 'easeInOut', delay: 0.2 } 
    }
}

const textVariants = {
    animateOne: {
        scale: 1,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        color: '#ffc1f3',
        transition: {
            duration: 0.1,
            delay: 0.2,
            yoyo: Infinity,
        }
     }
}


function Question({ score, setScore, id, updateScore }) {
    // console.log('question', questions)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(null);
    
    useEffect(() => {
        // shuffle the question
        questions.sort(() => Math.floor(0.5 - Math.random()));
        return () => {

        }
    }, [])

    // questions.map(question => {
    //     return question.answers.sort(() => Math.random() -0.5)
    // })

    const onHandlerAnswer = (answer) => {
        if(answer.correct) {
            setScore(score + 50)
            setCorrect(true);
        }
        else {
            setCorrect(false)
        };
    }

    const setNextQuestion = () => {
        // show another question 

        // end game 
        if(currentQuestionIndex >= questions.length -1 ) {
            updateScore();
            alert(`      GAME OVER !
                         Your score is ${score}
                         Try again :D
            `)
            // return Redirect('/');
            return window.location.href = '/';
        }
        else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setCorrect(null);
        }
    }


    // console.log(id);
    if(!id) {
       return window.location.href = '/';
    }
    return (   
        <div className={ correct === null ? 'font-slideTwo bg-primary-100 p-4 min-h-screen xl:max-h-screen' : 
            correct === true ? 'font-slideTwo correct p-4 min-h-screen xl:max-h-screen' : 'font-slideTwo wrong p-4 min-h-screen xl:max-h-screen'
        }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ReactAudioPlayer src={music} autoPlay controls className="hidden"/>
                <nav className="text-3xl grid grid-cols-2 text-center text-primary-300">
                    <motion.div
                        className="bg-primary-200 col-span-1"
                        variants={textVariants}
                        animate="animateOne"
                    >Score: {score}</motion.div>

                </nav>
            <div id="text-question" className="text-center font-slideOne m-2 text-base sm:text-2xl font-semibold text-primary-400 lg:text-5xl">
                { questions[currentQuestionIndex].textQuestion}
            </div>
            <main className="grid grid-cols-4 gap-2 px-2 grid-rows-1 sm:grid-rows-1 text-xl"
            >
                <div id="img-question" className="question-img h-24 w-5/12 ml-12 mb-10 col-start-2 col-end-4 sm:w-6/12 sm:mb-16 sm:ml-12 md:mx-12 md:mt-16 md:w-8/12 lg:w-12/12 lg:w-full overflow-visible lg:mt-24 lg:col-span-1 xl:ml-48">
                            {
                                <img src={questions[currentQuestionIndex].svg} alt="animals"/>
                            }
                </div>

                <div className="text-2xl box-content mb-24 text-center flex flex-col justify-center col-span-4 sm:items-center sm:text-3xl md:text-5xl lg:col-span-3 lg:justify-start lg:items-around lg:mb-32 xl:mr-48 ">
                    <div id="question" className="question-text mb-16 sm:mb-0 flex justify-center sm:pb-24 md:pt-16 lg:py-24 items-center">
                        { questions[currentQuestionIndex].questions.map((question,key) => (
                            <div key={key} className="ques">{question}</div>
                        ) )}
                    </div>
                    <div id="answer-buttons" className="flex justify-center items-center overflow-visible">
                            {   
                                questions[currentQuestionIndex].answers.map((answer,key) => (
                                    <motion.button key={key+10} 
                                        className={(correct === null ? 'btn pointer-events-auto' : (answer.correct ? 'btn correct pointer-events-none': 'btn wrong pointer-events-none'))}
                                        onClick={ () => onHandlerAnswer(answer)}
                                        variants={btnVariants}
                                        whileHover="hover"
                                        exit="exit"
                                        >{answer.text}</motion.button>
                                ))
                            }
                    </div>
                    <motion.button
                        className="bg-primary-200 mt-6 w-1/3 sm:mt-12 self-end overflow-visible"
                        onClick={setNextQuestion}
                        variants={textVariants}
                        animate="animateOne"
                    >Next</motion.button>
                </div>
            </main>

        </div>
    )
}

export default Question
