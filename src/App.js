import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenClothing from "./pages/MenClothing";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Men's clothing" element={<MenClothing />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
