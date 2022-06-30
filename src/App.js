import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './components/Calender/Calender';
import Footer from './components/Calender/Footer/Footer';
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
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
