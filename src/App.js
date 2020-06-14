import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={exerciseList} />
      <Route path='/edit/:id' component={editExercise} />
      <Route path='/create' component={createExercise} />
      <Route path='/user' component={exerciseList} />
    </Router>
  );
}

export default App;
