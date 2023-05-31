import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { ProductProvider } from './context/ProductContext/ProductState';


function App() {

  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
