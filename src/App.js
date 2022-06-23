import Home from './Home';
import Register from './Register';
import Login from './Login';
import ToDoList from './ToDoList';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {

  return (
    <main className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/to-do-list' element={<ToDoList />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;