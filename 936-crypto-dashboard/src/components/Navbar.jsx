import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-pitchblack flex justify-between items-center px-6 py-4 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-4" />
        <span className="text-white text-2xl font-bold">936</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-lightblue">Home</Link>
        <Link to="/portfolio" className="text-white hover:text-lightblue">Portfolio</Link>
        <Link to="/swap" className="text-white hover:text-lightblue">Swap</Link>
        <Link to="/chat" className="text-white hover:text-lightblue">Chat</Link>
      </div>
    </nav>
  );
}

export default Navbar;
