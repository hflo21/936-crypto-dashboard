import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-pitchblack min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        <Outlet /> {/* This renders the current page */}
      </div>
    </div>
  );
}

export default App;
