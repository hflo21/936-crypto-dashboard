import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Swap from "./pages/Swap";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">🚀 936 Crypto Dashboard is Alive!</h1>
    </div>
  );
}

export default App;
