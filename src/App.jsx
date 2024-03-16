import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { AuthProvider } from './Providers/AuthProvider';
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import VideoSession from "./Components/VideoSession";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
Dashboard
function App() {
  

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
          <Route path="/video" element={<VideoSession />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/videos" element={<Index />} /> */}
            <Route path="/videos/:id" element={<Show />} />
            <Route path="/videos/edit" element={<Edit />} />
            <Route path="/videos/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;