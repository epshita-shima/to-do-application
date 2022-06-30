import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompleteTask from './components/CompleteTask/CompleteTask';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Todo from './components/Todo/Todo';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/completetask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/calender' element={<CompleteTask></CompleteTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
