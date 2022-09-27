import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Contact from './components/Contact';
import About from './components/About';
import ProductsList from './components/ProductsList';
import ProductsDetails from './components/ProductsDetails';
import CartList from './components/CartList';
import Payment from './components/Payment';
import Success from './components/Success';



function App() {
    return (
    <div >
      <Navbar/>
      <Routes className="r">
      <Route path="/" element={<ProductsList/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route  path="/product/:id" element={<ProductsDetails />}/>
      <Route path="/cart" element={<CartList/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/success" element={<Success/>}/>
      </Routes>

    </div>
  );
}

export default App;
