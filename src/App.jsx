import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
const LazyHeader = lazy(() => import("./components/Header/Header"));
const MainContent = lazy(() => import("./components/Main/MainContent"));
const Country = lazy(() => import("./pages/Country"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <LazyHeader />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
