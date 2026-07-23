import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import PageNotFound from "../pages/PageNotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalProvider } from "../context/GlobalContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<PageHome />}></Route>
            <Route path="/movie/:id" element={<PageSingleMovie />}></Route>
            <Route path="/about-us" element={<PageAbout />}></Route>
            <Route path="/favourites" element={<PageFavourites />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
