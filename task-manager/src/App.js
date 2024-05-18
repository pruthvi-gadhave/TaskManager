
import './App.css';
import Sidebar from './components/Sidebar';
import { Router, Routes, Route } from "react-router-dom" ;
import TaskList from './components/TaskList';
import TimeTracker from './components/TimeTracker';
import TaskForm from './components/TaskForm';

function App() {
  return (

    <div className='landing-page '>
      <div >
        <Sidebar />
      </div>
      <div >

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route exact path="/timetracker" element={<TimeTracker />} />
        </Routes>
      </div>
      <TaskForm/>
    </div>

  );
}

export default App;
