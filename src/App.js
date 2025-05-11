import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenClothing from "./pages/MenClothing";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import WomenClothing from "./pages/WomenClothing";  


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Men's clothing" element={<MenClothing />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Women's Clothing" element={<WomenClothing />} />

      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
