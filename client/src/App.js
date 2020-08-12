import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import Home from './components/Home';
import Modal from './components/Modal';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Question from './components/Question';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('')
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [id, setId] = useState(null);
  const [users, setUsers] = useState([]);
  const [openNav, setOpenNav] = useState(false);

  console.log(id);
  useEffect(() => {
      axios.get('/api/users')
          .then(res => {
              setUsers(res.data.data);
              console.log(res.data.data)
          })
  }, [])

  const updateScore = () => {
      axios.put(`/api/users/${id}`, { score })
      .then( res => res.data)
      .catch( err => err )
  }



  return (
    <>
        <Modal showModal={showModal} setShowModal={setShowModal} name={name} setName={setName} id={id} setId={setId} />
        <AnimatePresence exitBeforeEnter onExitComplete={ () => setShowModal(false)}>
        <Switch location={location} key={location.key}>
        <Route path="/questions">
          <Question score={score} setScore={setScore} id={id} updateScore={updateScore} />  
        </Route>
        <Route path="/">
          <Home setShowModal={setShowModal} users={users} openNav={openNav} setOpenNav={setOpenNav} />
        </Route>
        </Switch>
        </AnimatePresence>
   </>
  );
}

export default App;
