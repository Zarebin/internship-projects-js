import React, { useState } from "react";
import "../src/components/style.scss";
import Gender from "./components/Gender";

import Age from "./components/Age";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
 
  const [gender, setGender] = useState("");
  const saveGenderHandler = (enteredGender) => {
    setGender(enteredGender);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Gender onSelectGender={saveGenderHandler} />}
        />
        <Route exact path="/age" element={<Age selectedGender={gender} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
