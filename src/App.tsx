import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Products from './page/Products/Products';
// import Carts from './page/Carts/Carts';
import Layout from "./components/layout/Layout";
// import Wishlists from "./page/Wishlist/Wishlists";

import { Suspense, lazy } from "react";
import Loader from "./components/loader/Loader";

// Lazy load components
const Products = lazy(() => import('./page/Products/Products'));
const Carts = lazy(() => import('./page/Carts/Carts'));
const Wishlists = lazy(() => import('./page/Wishlist/Wishlists'));
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
    </BrowserRouter>

  );
}

export default App;
