import React, { useState, useEffect } from 'react'
import { questions } from '../datas';
import { motion, AnimatePresence } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import music from '../music1.mp3';

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
    console.log(id)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(null);

    questions.map(question => {
        return question.answers.sort(() => Math.random() -0.5)
    })

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
            window.location.href = '/';
        }
        else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setCorrect(null);
        }
    }




    return (   
        <div className={ correct === null ? 'font-slideTwo bg-primary-100 h-full p-10' : 
            correct === true ? 'font-slideTwo h-full correct p-10' : 'font-slideTwo wrong h-full p-10'
        }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ReactAudioPlayer src={music} autoPlay controls className="hidden"/>
                <nav className="bg-primary-200 text-3xl grid grid-cols-2 text-center text-primary-300">
                    <motion.div
                        variants={textVariants}
                        animate="animateOne"
                    >Score: {score}</motion.div>
                    <motion.button id="next-btn"
                        onClick={setNextQuestion}
                        variants={textVariants}
                        animate="animateOne"
                    >Next</motion.button>
                </nav>
            <div id="text-question" className="text-center font-slideOne m-6 text-2xl text-primary-400 lg:text-4xl">
                { questions[currentQuestionIndex].textQuestion}
            </div>
            <main className="grid grid-cols-4 gap-2 px-2 h-screen grid-rows-3 sm:grid-rows-2 text-xl"
            >
                <div id="img-question" className="question-img col-start-2 col-end-4 sm:col-span-2 lg:w-9/12">
                            {
                                <img src={questions[currentQuestionIndex].svg} alt="animals"/>
                            }
                </div>
                <div className="text-4xl sm:text-5xl text-center flex flex-col justify-center col-span-4 sm:col-span-2 sm:justify-start lg:col-span-2 lg:justify-start lg:items-center lg:pr-8">
                    <div id="question" className="question-text flex justify-center pb-20 sm:pb-24 md:pt-16 lg:py-24 items-center">
                        { questions[currentQuestionIndex].questions.map((question,key) => (
                            <div key={key} className="ques">{question}</div>
                        ) )}
                    </div>
                    <div id="answer-buttons" className="flex justify-center items-center">
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
                </div>
            </main>
        </div>
    )
}

export default Question
