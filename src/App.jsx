import {
  Routes,
  Route,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import { Toaster } from "react-hot-toast";

import Layout from "./components/layout/Layout";

const Dashboard = lazy(() =>
  import("./pages/Dashboard")
);

const Products = lazy(() =>
  import("./pages/Products")
);

const ProductDetails = lazy(() =>
  import("./pages/ProductDetails")
);

const Analytics = lazy(() =>
  import("./pages/Analytics")
);

const Settings = lazy(() =>
  import("./pages/Settings")
);

const NotFound = lazy(() =>
  import("./pages/NotFound")
);

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
            Loading...
          </div>
        }
      >
        <Routes>
          
          {/* Layout Routes */}
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="products"
              element={<Products />}
            />

            <Route
              path="products/:id"
              element={
                <ProductDetails />
              }
            />

            <Route
              path="analytics"
              element={<Analytics />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;