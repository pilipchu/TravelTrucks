import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader.jsx";
import "./App.css";

const Navigation = lazy(() => import("../Navigation/Navigation.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path='*' element={}/> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
