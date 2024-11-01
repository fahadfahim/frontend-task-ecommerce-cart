import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Suspense, lazy } from "react";
import Loader from "./components/loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = lazy(() => import('./pages/Products/Products'));
const Carts = lazy(() => import('./pages/Carts/Carts'));
const Wishlists = lazy(() => import('./pages/Wishlist/Wishlists'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="cartlist" element={<Carts />} />
            <Route path="wishlist" element={<Wishlists />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={1000} />

    </BrowserRouter>

  );
}

export default App;
