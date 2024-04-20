import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AuthProvider } from "./Providers/AuthProvider";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import SideBar from "../src/Components/SideBar";
import ContentCreator from "./Components/ContentCreator";
// import QuestionnaireModal from "./Components/QuestionnaireModal";
Dashboard;

function App() {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [thumbnailReload, setthumbnailReload] = useState(false);


  const theme = {
    colors: {
      primary: "#OO7bff",  //brand colors
      secondary: "#6c757d"
    }
  }

  // Handler for when the questionnaire is submitted
  const handleQuestionnaireSubmit = (selectedInterests) => {
    console.log("Selected interests:", selectedInterests);
    // Process the selected interests here, e.g., send them to an API or update your state
  };

  // Handler to open the modal
  const openQuestionnaireModal = () => {
    setIsQuestionnaireOpen(true);
  };

  // Handler to close the modal
  const closeQuestionnaireModal = () => {
    setIsQuestionnaireOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ModalProvider>
          <div className="App">
            {/* <QuestionnaireModal
          isOpen={isQuestionnaireOpen}
          onClose={closeQuestionnaireModal}
          onSubmit={handleQuestionnaireSubmit}
        /> */}
            <Router>
              <NavBar sidebar={sidebar} setSidebar={setSidebar}/>
              <div className="side-routes">
              <SideBar sidebar={sidebar} setSidebar={setSidebar}/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/session" element={<New />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Index />} />
                <Route path="/videos/:id" element={<Show />} />
                <Route path="/videos/edit" element={<Edit />} />
                <Route path="/videos/new" element={<New />} />
                <Route path="/creator/:creatorId" element={<ContentCreator />} />
                <Route path="*" element={<FourOFour />} />
                <Route
                  path="/creator/:creatorId"
                  element={<ContentCreator />}
                />
              </Routes>
              </div>
            </Router>
            {/* <button onClick={openQuestionnaireModal}>Open Questionnaire</button> */}
          </div>
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
