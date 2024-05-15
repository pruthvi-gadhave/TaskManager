
import './App.css';
import Sidebar from './components/Sidebar';
import { Router, Routes, Route} from "react-router-dom"
import TaskList from './components/TaskList';
import TimeTracker from './components/TimeTracker';

function App() {
  return (
  
    <div className='landing-page d-flex'>
      <div className='w-25'>
        <Sidebar />
      </div>
      <div className='w-75'>

        <Routes>
          <Route path="/" element={<TaskList />} />          
          <Route exact path="/timetracker" element={<TimeTracker />} />          
      </Routes>
      </div>
    </div>
 
  );
}

export default App;
