import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Teacher from './components/Teacher';
import Student from './components/Student';


function App() {
  return (
    <Router>
      <Header/>
     <Routes>
       <Route path='/' element={<Teacher/>}/>
       <Route path='/students' element={<Student/>}/>
     </Routes>
    </Router>
  );
}

export default App;
