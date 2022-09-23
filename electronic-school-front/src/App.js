import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListStudentComponent />} />
          <Route path="/" element={<ListStudentComponent />}></Route> 
          <Route path="/student" element={<ListStudentComponent />}></Route>
          <Route path="/add-student" element={<AddStudentComponent />}></Route>
        </Routes>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
