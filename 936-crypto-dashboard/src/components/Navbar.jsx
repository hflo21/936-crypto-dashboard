import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-pitchblack flex justify-between items-center px-6 py-4 shadow-md">
      {/* Left - Logo and Brand */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="936 Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-white font-bold text-xl">936</h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex gap-8 text-lightblue text-md">
        <Link to="/">Trade</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/swap">Swap</Link>
        <Link to="/chat">936 Chat</Link>
      </div>

      {/* Right - Connect button */}
      <div className="flex items-center gap-4">
        <button className="bg-vidired hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          Connect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
