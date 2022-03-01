import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout-NAV/Layout";
import Home from "./components/pages/Home.jsx";
import Shop from "./components/pages/Shop.jsx";
import About from "./components/pages/About.jsx"
import Contact from "./components/pages/Contact.jsx";
import NoPage from "./components/pages/NoPage.jsx";

function App() {

  return (
    <>
      <Layout />

        <Routes>
            <Route index element={<Home />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  );
}

export default App;

