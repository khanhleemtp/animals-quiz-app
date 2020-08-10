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

const buttonVariants = {
    hover: {
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        color: '#ffc1f3',
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
     }
}

const btnVariants = {
    hover: {
        scale: 1.2,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
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
            duration: 0.2,
            delay: 0.2,
            yoyo: Infinity,
        }
     }
}


function Question({ name, score, setScore, setName, id, setId, updateScore }) {
    // console.log(questions);
    // console.log(score);
    console.log(id)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(null);

    questions.map(question => {
        return question.answers.sort(() => Math.random() -0.5)
    })

    const onHandlerAnswer = (answer) => {
        if(answer.correct) {
            setScore(score + 100)
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
        <div className={correct === null ? `font-slideTwo bg-primary-100 h-screen` : (
            correct === true ? `font-slideTwo h-screen correct` : `font-slideTwo wrong h-screen`
        )}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ReactAudioPlayer src={music} autoPlay controls className="hidden"/>
            <nav className="bg-primary-200 text-3xl grid grid-cols-2 text-center h-20 pt-4 text-primary-300">
                <motion.p
                    variants={textVariants}
                    animate="animateOne"
                >Score: {score} <span id="right-answers"></span></motion.p>
                <motion.button id="next-btn" className="pb-4" 
                    onClick={setNextQuestion}
                    variants={textVariants}
                    animate="animateOne"
                >Next</motion.button>
            </nav>
            <AnimatePresence exitBeforeEnter>
            <div id="text-question" className="text-center font-slideOne m-6 text-3xl text-primary-400">
                { questions[currentQuestionIndex].textQuestion}
            </div>
            <main id="question-container" className="grid grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="text-6xl text-center flex flex-col items-center col-span-2">
                    <div id="question" className="question-text flex justify-center pt-20">
                        { questions[currentQuestionIndex].questions.map((question,key) => (
                            <div key={key} className="ques">{question}</div>
                        ) )}
                    </div>
                    <div id="answer-buttons" className="flex justify-center mt-32">
                            {   
                                questions[currentQuestionIndex].answers.map((answer,key) => (
                                    <motion.button key={key} 
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
                <div id="img-question" className="question-img w-3/4 col-span-2">
                            {
                                <img src={questions[currentQuestionIndex].svg} alt="animals"/>
                            }
                </div>
            </main>
            </AnimatePresence>
        </div>
    )
}

export default Question
