import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import exerciseList from './components/exerciseList'
import editExercise from './components/editExercise'
import createExercise from './components/createExercise'
import createUser from './components/createUser'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={exerciseList} />
      <Route path='/edit/:id' component={editExercise} />
      <Route path='/create' component={createExercise} />
      <Route path='/user' component={createUser} />
    </Router>
  );
}

export default App;
