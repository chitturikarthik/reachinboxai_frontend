import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import OneBox from "./Pages/OneBox";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OneBox />} />
          <Route path="/onebox" element={<OneBox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
