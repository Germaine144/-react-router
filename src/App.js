import React from "react";
import './App.css';
import Navbars from './components/navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserProfiles from "./components/userProfile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/users/:id" element = {<UserProfiles />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
