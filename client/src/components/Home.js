import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactAudioPlayer from 'react-audio-player';
import music from '../music2.mp3';


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
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        transition: {
            duration: 0.3,
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


function Home({ setShowModal, showModal, users, setUsers }) {

    
    return (
    <motion.div className="font-slideTwo" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
    >   
        <ReactAudioPlayer src={music} autoPlay controls className="hidden"/>
        <div className="grid grid-cols-3 gap-3 p-10 bg-primary-100 text-primary-700">
            <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase">
                <Link to="#">Home</Link>
            </div>
            <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase">
                <Link to="#">About</Link>
            </div>
            <div className="rounded-full bg-primary-200 flex justify-center items-center w-full h-10 text-center uppercase">
                <Link to="#">Contact</Link>
            </div>
            <div className="roket relative text-3xl font-light">
                {/* <motion.div
                    variants={textVariants}
                    animate="animateOne"
                 > */}
                     <svg className="w-3/12 pb-64" id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m361.52 296.56a35.767 35.767 0 0 1 0 50.59l-58.56 59.42-33.96-34.38a52.907 52.907 0 0 1 -.09-74.26 303.2 303.2 0 0 0 87.88-46.2l.03.04a35.78 35.78 0 0 0 4.7 44.79z" fill="#475673"/><path d="m191.96 127a35.751 35.751 0 0 0 44.78 4.69 304.131 304.131 0 0 0 -46.93 88.67 52.9 52.9 0 0 1 -73.48-.84l-34.39-33.96 59.43-58.56a35.767 35.767 0 0 1 50.59 0z" fill="#475673"/><path d="m477.58 11a305.394 305.394 0 0 1 -7.91 69.22l-.34-.08a130.141 130.141 0 0 1 -61.07-60.8l-.15-.31a303.245 303.245 0 0 1 69.47-8.03z" fill="#ed6337"/><path d="m208.03 261.78-25.13-25.13q2.22-8.235 4.91-16.29a304.131 304.131 0 0 1 46.93-88.67h.01a306.813 306.813 0 0 1 173.36-112.66l.15.31a130.141 130.141 0 0 0 61.07 60.8l.34.08a303.176 303.176 0 0 1 -56.36 117.82 305.378 305.378 0 0 1 -56.52 55.69 303.2 303.2 0 0 1 -87.88 46.2q-8.64 2.865-17.52 5.21l-23.08-23.08z" fill="#e5f5fd"/><path d="m228.31 282.06-12.77 51.65-60.66-60.67 53.15-11.26z" fill="#ed6337"/><path d="m183.74 327.11a21.793 21.793 0 0 1 -19.15 21.66l-27.79 3.45 3.44-27.8a21.833 21.833 0 0 1 43.5 2.69z" fill="#fadf4a"/><circle cx="336.745" cy="151.84" fill="#50a6ea" r="37.867"/><path d="m408.26 19.34-.15-.31a306.813 306.813 0 0 0 -173.36 112.66h-.01a304.131 304.131 0 0 0 -46.93 88.67q-2.685 8.055-4.91 16.29l20 20q2.22-8.235 4.91-16.29a304.131 304.131 0 0 1 46.93-88.67h.01a306.985 306.985 0 0 1 166.55-110.974 130.115 130.115 0 0 1 -13.04-21.376z" fill="#a6b7d0"/><path d="m144.5 398.04h-9.454a6 6 0 1 1 0-12h9.454a41.764 41.764 0 0 0 9.71-1.142 6 6 0 0 1 2.795 11.67 53.748 53.748 0 0 1 -12.505 1.472z" fill="#f9d438"/><path d="m113.387 398.038h-16.387a6 6 0 0 1 -5.885-4.83 57.419 57.419 0 0 1 10.255-42l-4.525-.115a6 6 0 0 1 -5.848-6 53.923 53.923 0 0 1 16.103-38.514 52.678 52.678 0 0 1 37.816-15.552 53.414 53.414 0 0 1 6.349.425c1.683.211 3.425.517 5.163.91a53.578 53.578 0 0 1 40.294 40.48c.374 1.684.666 3.385.866 5.058a53.447 53.447 0 0 1 -15.257 44.467 6 6 0 1 1 -8.484-8.485 41.251 41.251 0 0 0 12.157-29.351 41.727 41.727 0 0 0 -.325-5.16q-.238-1.981-.67-3.919a41.575 41.575 0 0 0 -31.239-31.388c-1.345-.3-2.7-.543-4.01-.707a41.119 41.119 0 0 0 -4.93-.33h-.313a40.9 40.9 0 0 0 -28.96 12.073 42.069 42.069 0 0 0 -12.157 24.154l11.36.288a6 6 0 0 1 3.817 10.5 46.172 46.172 0 0 0 -16.115 36h10.93a6 6 0 1 1 0 12z" fill="#f9d438"/><g fill="#ccd3df"><path d="m395.659 260.914a6 6 0 0 1 -3.83-10.621c4.111-3.405 8.19-6.97 12.121-10.6a6 6 0 1 1 8.137 8.819c-4.088 3.772-8.328 7.48-12.6 11.02a5.974 5.974 0 0 1 -3.828 1.382z"/><path d="m426.943 231.035a6 6 0 0 1 -4.438-10.035 300.531 300.531 0 0 0 23.287-29.059c4.509-6.4 8.814-13.065 12.8-19.8 3.242-5.479 6.345-11.129 9.221-16.792a297.025 297.025 0 0 0 19.462-48.466 6 6 0 0 1 11.487 3.472 309.129 309.129 0 0 1 -20.249 50.428c-2.993 5.892-6.221 11.77-9.594 17.469-4.145 7-8.624 13.931-13.314 20.593a312.778 312.778 0 0 1 -24.218 30.222 5.987 5.987 0 0 1 -4.444 1.968z"/><path d="m20.991 250.51a6 6 0 0 1 -4.242-10.242l4.6-4.595a6 6 0 0 1 8.484 8.485l-4.595 4.595a5.982 5.982 0 0 1 -4.247 1.757z"/><path d="m38.62 232.881a6 6 0 0 1 -4.242-10.243l20.53-20.53a6 6 0 1 1 8.485 8.486l-20.531 20.53a5.982 5.982 0 0 1 -4.242 1.757z"/><path d="m30.029 272.937a6 6 0 0 1 -4.243-10.243l24.133-24.133a6 6 0 0 1 8.486 8.485l-24.133 24.134a5.984 5.984 0 0 1 -4.243 1.757z"/><path d="m65.961 237a6 6 0 0 1 -4.242-10.242l8.922-8.922a6 6 0 1 1 8.484 8.486l-8.925 8.925a5.982 5.982 0 0 1 -4.239 1.753z"/><path d="m18.982 315.447a6 6 0 0 1 -4.242-10.242l26.66-26.658a6 6 0 1 1 8.485 8.485l-26.66 26.658a5.982 5.982 0 0 1 -4.243 1.757z"/><path d="m59.383 275.047a6 6 0 0 1 -4.242-10.247l31.231-31.231a6 6 0 1 1 8.484 8.485l-31.231 31.236a5.982 5.982 0 0 1 -4.242 1.757z"/><path d="m212.544 442.062a6 6 0 0 1 -4.244-10.242l4.594-4.594a6 6 0 0 1 8.486 8.484l-4.594 4.6a5.982 5.982 0 0 1 -4.242 1.752z"/><path d="m230.173 424.434a6 6 0 0 1 -4.242-10.243l20.53-20.53a6 6 0 0 1 8.484 8.485l-20.53 20.53a5.979 5.979 0 0 1 -4.242 1.758z"/><path d="m221.581 464.489a6 6 0 0 1 -4.242-10.242l24.134-24.133a6 6 0 1 1 8.484 8.485l-24.134 24.133a5.982 5.982 0 0 1 -4.242 1.757z"/><path d="m257.514 428.557a6 6 0 0 1 -4.243-10.243l8.92-8.921a6 6 0 0 1 8.487 8.485l-8.921 8.922a5.986 5.986 0 0 1 -4.243 1.757z"/><path d="m210.535 507a6 6 0 0 1 -4.242-10.243l26.658-26.657a6 6 0 1 1 8.485 8.485l-26.659 26.658a5.982 5.982 0 0 1 -4.242 1.757z"/><path d="m250.936 466.6a6 6 0 0 1 -4.243-10.243l31.232-31.232a6 6 0 1 1 8.484 8.486l-31.231 31.231a5.979 5.979 0 0 1 -4.242 1.758z"/></g><path d="m447.828 352.31a33.632 33.632 0 0 1 -21.135-21.2 6 6 0 0 0 -11.386 0 33.632 33.632 0 0 1 -21.135 21.2 6 6 0 0 0 0 11.38 33.632 33.632 0 0 1 21.135 21.2 6 6 0 0 0 11.386 0 33.632 33.632 0 0 1 21.135-21.2 6 6 0 0 0 0-11.38z" fill="#50a6ea"/><path d="m75.828 111.31a33.632 33.632 0 0 1 -21.135-21.2 6 6 0 0 0 -11.386 0 33.632 33.632 0 0 1 -21.135 21.2 6 6 0 0 0 0 11.38 33.632 33.632 0 0 1 21.135 21.2 6 6 0 0 0 11.386 0 33.632 33.632 0 0 1 21.135-21.2 6 6 0 0 0 0-11.38z" fill="#50a6ea"/><path d="m127.038 65a11 11 0 1 1 10.985-11 11 11 0 0 1 -10.985 11z" fill="#d8ff33"/><path d="m402.038 456a11 11 0 1 1 10.985-11 11 11 0 0 1 -10.985 11z" fill="#d8ff33"/></svg>
                {/* </motion.div> */}
               
                <div className="rank m-2 absolute top-0 pt-40 grid grid-cols-2 text-center cursor-pointer">
                    <motion.h2 className="col-span-2 border-4 px-8 rounded-md"
                    variants={textVariants}
                    animate="animateOne"
                    >Ranking - Top 5</motion.h2>
                    <div className="flex justify-between col-span-2">
                        <h4 className="mr-24">Name</h4>
                        <h4>Score</h4>
                    </div>

                    {
                        users && users.length > 0 && 
                        users.map((user, id) => (
                           <div key={id} className="flex justify-between col-span-2">
                                <h4>{user.name}</h4>
                                <h4>{user.score}</h4>
                           </div>

                        )) 
                    }
                </div>
            </div>
            <div className="hashtag mt-64 text-center">
                <motion.div className="uppercase text-6xl cursor-pointer"
                    variants={textVariants}
                    animate="animateOne"
                >
                    #<span className="text-primary-300">Stay</span>
                    <span  className="text-primary-700 mx-3">at</span>
                    <span  className="text-primary-400">home</span></motion.div>
                <div className="uppercase text-6xl font-bold">GAMES</div>
            </div>
            <div className="calender">
                <svg className="w-3/4" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="social_distancing-protection-protect-face_shield-face_mask" data-name="social distancing-protection-protect-face shield-face mask"><path d="m61 47v14h-24v-14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6z" fill="#ff3051"/><path d="m57 30a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1 -2 2h-1v-4z" fill="#ffc477"/><path d="m58 28v1h-2l-5-4-9 4h-2v-1a9 9 0 0 1 18 0z" fill="#ffd422"/><path d="m56 30v4l-7-2-7 2v-4-1l9-4 5 4z" fill="#ffc477"/><path d="m56 29v5l-4-1.14v-3.86l-3.57-2.86 2.57-1.14z" fill="#ffa733"/><path d="m49 32 7 2a7 7 0 0 1 -14 0z" fill="#ddfffb"/><path d="m61 47v14h-4v-14a6 6 0 0 0 -6-6h4a6 6 0 0 1 6 6z" fill="#cd2a00"/><path d="m58 28v1h-2l-2.02-1.62a9.04 9.04 0 0 0 -6.98-8.16 9.356 9.356 0 0 1 2-.22 9.014 9.014 0 0 1 9 9z" fill="#ebbf00"/><path d="m56 34a7 7 0 0 1 -7 7 6.908 6.908 0 0 1 -2-.29 7 7 0 0 0 5-6.71l-5-1.43 2-.57z" fill="#00e7f0"/><path d="m42 30v4h-1a2.015 2.015 0 0 1 -2-2 2.006 2.006 0 0 1 2-2z" fill="#ffc477"/><path d="m27 47v14h-24v-14a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6z" fill="#91dc5a"/><path d="m23 30a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 1 -2 2h-1v-4z" fill="#ffc477"/><path d="m24 28v1h-2l-7-4-7 4h-2v-1a9 9 0 0 1 18 0z" fill="#ffd422"/><path d="m22 30v4l-7-2-7 2v-4-1l7-4 7 4z" fill="#ffc477"/><path d="m15 32 7 2a7 7 0 0 1 -14 0z" fill="#ddfffb"/><path d="m8 30v4h-1a2.015 2.015 0 0 1 -2-2 2.006 2.006 0 0 1 2-2z" fill="#ffc477"/><path d="m22 29v5l-4-1.14v-3.86l-3.57-2.86 2.57-1.14z" fill="#ffa733"/><path d="m27 47v14h-4v-14a6 6 0 0 0 -6-6h4a6 6 0 0 1 6 6z" fill="#5eac24"/><path d="m24 28v1h-2l-2.02-1.62a9.04 9.04 0 0 0 -6.98-8.16 9.356 9.356 0 0 1 2-.22 9.014 9.014 0 0 1 9 9z" fill="#ebbf00"/><path d="m22 34a7 7 0 0 1 -7 7 6.908 6.908 0 0 1 -2-.29 7 7 0 0 0 5-6.71l-5-1.43 2-.57z" fill="#00e7f0"/><path d="m55 40h-.73a8.006 8.006 0 0 0 2.66-5h.07a3.009 3.009 0 0 0 3-3 2.973 2.973 0 0 0 -1.22-2.4.981.981 0 0 0 .22-.6v-1a10 10 0 0 0 -20 0v1a.981.981 0 0 0 .22.6 2.973 2.973 0 0 0 -1.22 2.4 3.009 3.009 0 0 0 3 3h.07a8.006 8.006 0 0 0 2.66 5h-.73a7.008 7.008 0 0 0 -7 7v14a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-14a7.008 7.008 0 0 0 -7-7zm3-8a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1zm-17 1a1 1 0 0 1 0-2zm0-5a8 8 0 0 1 16 0h-.65l-4.73-3.78a.985.985 0 0 0 -1.03-.13l-8.8 3.91zm2 1.65 7.85-3.49 4.15 3.32v3.19l-5.73-1.63a.991.991 0 0 0 -.54 0l-5.73 1.63zm.05 5.09 5.95-1.7 5.95 1.7a6 6 0 0 1 -11.9 0zm16.95 25.26h-22v-13a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5z"/><path d="m21 40h-.73a8.006 8.006 0 0 0 2.66-5h.07a3.009 3.009 0 0 0 3-3 2.973 2.973 0 0 0 -1.22-2.4.981.981 0 0 0 .22-.6v-1a10 10 0 0 0 -20 0v1a.981.981 0 0 0 .22.6 2.973 2.973 0 0 0 -1.22 2.4 3.009 3.009 0 0 0 3 3h.07a8.006 8.006 0 0 0 2.66 5h-.73a7.008 7.008 0 0 0 -7 7v14a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-14a7.008 7.008 0 0 0 -7-7zm3-8a1 1 0 0 1 -1 1v-2a1 1 0 0 1 1 1zm-17 1a1 1 0 0 1 0-2zm0-5a8 8 0 0 1 16 0h-.73l-6.77-3.87a1.044 1.044 0 0 0 -1 0l-6.77 3.87zm2 1.58 6-3.43 6 3.43v3.09l-5.73-1.63a.991.991 0 0 0 -.54 0l-5.73 1.63zm.05 5.16 5.95-1.7 5.95 1.7a6 6 0 0 1 -11.9 0zm16.95 25.26h-22v-13a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5z"/><path d="m19.293 11.707 1.414-1.414-2.293-2.293h27.172l-2.293 2.293 1.414 1.414 4-4a1 1 0 0 0 0-1.414l-4-4-1.414 1.414 2.293 2.293h-27.172l2.293-2.293-1.414-1.414-4 4a1 1 0 0 0 0 1.414z"/><path d="m26 16v2h5v2h-6a1 1 0 0 1 -1-1v-4a1 1 0 0 1 1-1h4v-2h-5v-2h6a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/><path d="m41 11v9h-2v-6l-1.2 1.6a1.041 1.041 0 0 1 -1.6 0l-1.2-1.6v6h-2v-9a1 1 0 0 1 1.8-.6l2.2 2.93 2.2-2.93a1 1 0 0 1 1.8.6z"/></g></svg>
            </div>
            <div className="rounded-full mb-4 bg-primary-200 flex justify-center col-span-3">
                <motion.p className="bg-primary-500 rounded-full px-10 py-2 text-3xl my-5 outline-none cursor-pointer"
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