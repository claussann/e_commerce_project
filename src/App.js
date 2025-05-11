import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MenClothing from "./pages/MenClothing";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import WomenClothing from "./pages/WomenClothing";  
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/productsSlice";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    async function getProducts(){
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      dispatch(setProducts(products))
    }
    getProducts()
  },[])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Men's clothing" element={<MenClothing />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Women's Clothing" element={<WomenClothing />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
