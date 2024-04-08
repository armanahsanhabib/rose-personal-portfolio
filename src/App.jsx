import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common-components/Footer";
import Header from "./components/common-components/Header";
import "./css/common-css/basic.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import MySkills from "./pages/MySkills";
import NoPage from "./pages/NoPage";
import Portfolio from "./pages/Portfolio";
import Tutorials from "./pages/Tutorials";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="myskills" element={<MySkills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App; 