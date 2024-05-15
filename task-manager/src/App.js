
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
 <>
 <div className='landing-page d-flex'>
  <div className='w-25'>
  <Sidebar/>
  </div>
  <div className='w-75'>Right</div>
 
 </div>
  
 </>
  );
}

export default App;
