import {Routes,Route} from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { PageNotFound } from './components/PageNotFound';
import { CartPage } from './components/CartPage';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage/>} />
        <Route path="cart" element={<CartPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
