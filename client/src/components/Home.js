import React from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import music from '../music2.mp3';
import imgMenu from '../img/menu1.svg';
import imgLogo from '../img/logo.svg';
import imgRocket from '../img/rocket.svg';


const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' } 
    }
}

const buttonVariants = {
    hover: {
        scale: 1.2,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        transition: {
            duration: 0.2,
            yoyo: Infinity,
        }
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

const navVariant = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' } 
    }
}


function Home({ setShowModal, users, openNav, setOpenNav }) {

    
    return (
    <motion.div className="font-slideTwo" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
    >   
        <ReactAudioPlayer src={music} autoPlay controls className="hidden"/>
        <div className="grid grid-cols-3 gap-2 p-4 bg-primary-100 text-primary-700 lg:p-10 min-h-screen lg:max-h-screen top-0">
            <div className="flex justify-between items-center col-span-3 md:hidden">
                    <img src={imgLogo} className="w-2/12 h-12"/>
                    <img onClick={() => setOpenNav(!openNav) } src={imgMenu} className="w-1/12 h-12 md:hidden"/>
            </div>
            {
                openNav ?
                <motion.nav className={`flex flex-col justify-center items-center col-span-3 md:hidden`}
                    variants={navVariant}
                >
                <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase">
                    <Link to="#">Home</Link>
                </div>
                <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase m-2">
                    <Link to="#">About</Link>
                </div>
                <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase">
                    <Link to="#">Contact</Link>
                </div>
                </motion.nav> : <></>
            }

                <motion.nav className="hidden md:flex flex-row justify-center items-center md:col-span-3 md:container md:mx-auto lg:-mt-8 lg:text-xl "
                    variants={navVariant}
                >
                <div className="rounded-full bg-primary-200 hidden md:flex justify-center items-center w-full p-2 text-center uppercase">
                    <Link to="#">Home</Link>
                </div>
                <div className="rounded-full bg-primary-200 hidden md:flex justify-center items-center w-full p-2 text-center uppercase m-2">
                    <Link to="#">About</Link>
                </div>
                <div className="rounded-full bg-primary-200 hidden md:flex justify-center items-center w-full p-2 text-center uppercase">
                    <Link to="#">Contact</Link>
                </div>
                </motion.nav>

            <div className="roket flex flex-col text-2xl font-light col-span-3 lg:col-span-1 lg:h-48 lg:-mt-6 xl:mt-0 ">
                <motion.div className="welcome flex justify-start items-center tracking-wider text-primary-400 lg:text-2xl"
                    variants={navVariant}
                >
                    <img className="w-2/12 h-12 mt-2 mr-3" src={imgRocket}/>
                    <motion.h2
                        
                    >Welcome to AnimalsKid</motion.h2>
                </motion.div>
                

                <div className="rank m-2 top-0 grid grid-cols-2 text-center cursor-pointer lg:mr-24 lg:text-4xl lg:w-11/12">
                    <motion.h2 className="col-span-2 border-4 py-2 rounded-md"
                    variants={textVariants}
                    animate="animateOne"
                    >Ranking - Top 5</motion.h2>
                    <div    className="flex justify-between col-span-2 py-2 text-primary-400">
                        <h4 className="mr-24">Name</h4>
                        <h4>Score</h4>
                    </div>
                    {
                        users && users.length > 0 && 
                        users.map((user, id) => (
                           <div key={id} className="flex justify-between col-span-2 text-xl lg:text-3xl">
                                <h4 >{user.name}</h4>
                                <h4 >{user.score}</h4>
                           </div>

                        )) 
                    }
                </div>
            </div>

            <div className="hashtag text-center col-span-3 md:-mt-16 lg:col-span-1 lg:mt-32 lg:px-6 lg:text-6xl">
                <motion.div className="uppercase text-4xl lg:text-6xl cursor-pointer"
                    variants={textVariants}
                    animate="animateOne"
                >
                    #<span className="text-primary-300">Stay</span>
                    <span  className="text-primary-700 mx-2">at</span>
                    <span  className="text-primary-400">home</span>
                </motion.div>
                <div className="uppercase text-6xl font-bold">GAMES</div>
            </div>

            <div className="calender col-span-1 hidden lg:flex lg:-mr-8 lg:-mt-20 justify-center items-center xl:mt-0">
                <svg className="w-8/12" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="social_distancing-protection-protect-face_shield-face_mask" data-name="social distancing-protection-protect-face shield-face mask"><path d="m61 47v14h-24v-14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6z" fill="#ff3051"/><path d="m57 30a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1 -2 2h-1v-4z" fill="#ffc477"/><path d="m58 28v1h-2l-5-4-9 4h-2v-1a9 9 0 0 1 18 0z" fill="#ffd422"/><path d="m56 30v4l-7-2-7 2v-4-1l9-4 5 4z" fill="#ffc477"/><path d="m56 29v5l-4-1.14v-3.86l-3.57-2.86 2.57-1.14z" fill="#ffa733"/><path d="m49 32 7 2a7 7 0 0 1 -14 0z" fill="#ddfffb"/><path d="m61 47v14h-4v-14a6 6 0 0 0 -6-6h4a6 6 0 0 1 6 6z" fill="#cd2a00"/><path d="m58 28v1h-2l-2.02-1.62a9.04 9.04 0 0 0 -6.98-8.16 9.356 9.356 0 0 1 2-.22 9.014 9.014 0 0 1 9 9z" fill="#ebbf00"/><path d="m56 34a7 7 0 0 1 -7 7 6.908 6.908 0 0 1 -2-.29 7 7 0 0 0 5-6.71l-5-1.43 2-.57z" fill="#00e7f0"/><path d="m42 30v4h-1a2.015 2.015 0 0 1 -2-2 2.006 2.006 0 0 1 2-2z" fill="#ffc477"/><path d="m27 47v14h-24v-14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6z" fill="#91dc5a"/><path d="m23 30a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1 -2 2h-1v-4z" fill="#ffc477"/><path d="m24 28v1h-2l-7-4-7 4h-2v-1a9 9 0 0 1 18 0z" fill="#ffd422"/><path d="m22 30v4l-7-2-7 2v-4-1l7-4 7 4z" fill="#ffc477"/><path d="m15 32 7 2a7 7 0 0 1 -14 0z" fill="#ddfffb"/><path d="m8 30v4h-1a2.015 2.015 0 0 1 -2-2 2.006 2.006 0 0 1 2-2z" fill="#ffc477"/><path d="m22 29v5l-4-1.14v-3.86l-3.57-2.86 2.57-1.14z" fill="#ffa733"/><path d="m27 47v14h-4v-14a6 6 0 0 0 -6-6h4a6 6 0 0 1 6 6z" fill="#5eac24"/><path d="m24 28v1h-2l-2.02-1.62a9.04 9.04 0 0 0 -6.98-8.16 9.356 9.356 0 0 1 2-.22 9.014 9.014 0 0 1 9 9z" fill="#ebbf00"/><path d="m22 34a7 7 0 0 1 -7 7 6.908 6.908 0 0 1 -2-.29 7 7 0 0 0 5-6.71l-5-1.43 2-.57z" fill="#00e7f0"/><path d="m55 40h-.73a8.006 8.006 0 0 0 2.66-5h.07a3.009 3.009 0 0 0 3-3 2.973 2.973 0 0 0 -1.22-2.4.981.981 0 0 0 .22-.6v-1a10 10 0 0 0 -20 0v1a.981.981 0 0 0 .22.6 2.973 2.973 0 0 0 -1.22 2.4 3.009 3.009 0 0 0 3 3h.07a8.006 8.006 0 0 0 2.66 5h-.73a7.008 7.008 0 0 0 -7 7v14a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-14a7.008 7.008 0 0 0 -7-7zm3-8a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1zm-17 1a1 1 0 0 1 0-2zm0-5a8 8 0 0 1 16 0h-.65l-4.73-3.78a.985.985 0 0 0 -1.03-.13l-8.8 3.91zm2 1.65 7.85-3.49 4.15 3.32v3.19l-5.73-1.63a.991.991 0 0 0 -.54 0l-5.73 1.63zm.05 5.09 5.95-1.7 5.95 1.7a6 6 0 0 1 -11.9 0zm16.95 25.26h-22v-13a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5z"/><path d="m21 40h-.73a8.006 8.006 0 0 0 2.66-5h.07a3.009 3.009 0 0 0 3-3 2.973 2.973 0 0 0 -1.22-2.4.981.981 0 0 0 .22-.6v-1a10 10 0 0 0 -20 0v1a.981.981 0 0 0 .22.6 2.973 2.973 0 0 0 -1.22 2.4 3.009 3.009 0 0 0 3 3h.07a8.006 8.006 0 0 0 2.66 5h-.73a7.008 7.008 0 0 0 -7 7v14a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-14a7.008 7.008 0 0 0 -7-7zm3-8a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1zm-17 1a1 1 0 0 1 0-2zm0-5a8 8 0 0 1 16 0h-.73l-6.77-3.87a1.044 1.044 0 0 0 -1 0l-6.77 3.87zm2 1.58 6-3.43 6 3.43v3.09l-5.73-1.63a.991.991 0 0 0 -.54 0l-5.73 1.63zm.05 5.16 5.95-1.7 5.95 1.7a6 6 0 0 1 -11.9 0zm16.95 25.26h-22v-13a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5z"/><path d="m19.293 11.707 1.414-1.414-2.293-2.293h27.172l-2.293 2.293 1.414 1.414 4-4a1 1 0 0 0 0-1.414l-4-4-1.414 1.414 2.293 2.293h-27.172l2.293-2.293-1.414-1.414-4 4a1 1 0 0 0 0 1.414z"/><path d="m26 16v2h5v2h-6a1 1 0 0 1 -1-1v-4a1 1 0 0 1 1-1h4v-2h-5v-2h6a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/><path d="m41 11v9h-2v-6l-1.2 1.6a1.041 1.041 0 0 1 -1.6 0l-1.2-1.6v6h-2v-9a1 1 0 0 1 1.8-.6l2.2 2.93 2.2-2.93a1 1 0 0 1 1.8.6z"/></g></svg>
            </div>
            <div className="rounded-full md:h-32 flex justify-center items-center col-span-3 md:bg-primary-200 md:-mt-16 xl:mt-2">
                <motion.p className="bg-primary-500 px-6 lg:px-10 rounded-full py-1 text-2xl sm:text-3xl outline-none cursor-pointer"
                onClick={ () => setShowModal(true)}
                variants={buttonVariants}
                animate="hover"
                >
                Let's go</motion.p>
            </div>
        </div>
    </motion.div>
    )
}

export default Home