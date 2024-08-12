import { Route, Routes } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/supports/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/product/ProductPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./landing_page/about/About";
import NotFound from "./landing_page/NotFound";



function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/*" element={<NotFound/>}/>

     </Routes>
     <Footer />
    </>
   
    
     
  );
}

export default App;
