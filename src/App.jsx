import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
