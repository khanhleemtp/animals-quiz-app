import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import Home from './components/Home';
import Modal from './components/Modal';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Question from './components/Question';
import NotFound from './components/NotFound';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('')
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [id, setId] = useState(null);
  const [users, setUsers] = useState([]);
  const [openNav, setOpenNav] = useState(false);
  const [error, setError] = useState('');
  // console.log(id);
  useEffect(() => {
      axios.get('/api/users')
          .then(res => {
              setUsers(res.data.data);
              // console.log(res.data.data)
          })
  }, [])

  const updateScore = () => {
      axios.put(`/api/users/${id}`, { score })
      .then( res => res.data)
      .catch( err => err )
  }



  return (
    <>
        <Modal showModal={showModal} setShowModal={setShowModal} name={name} setName={setName} id={id} setId={setId} error={error} setError={setError} />
        <AnimatePresence exitBeforeEnter onExitComplete={ () => setShowModal(false)}>
        <Switch location={location} key={location.key}>
        <Route exact path="/questions">
          <Question score={score} setScore={setScore} id={id} updateScore={updateScore} />  
        </Route>
        <Route exact path="/" component={Home}>
          <Home setShowModal={setShowModal} users={users} openNav={openNav} setOpenNav={setOpenNav} />
        </Route>
        <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </AnimatePresence>
   </>
  );
}

export default App;
