import Home from "./views/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./container/navbar/navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
