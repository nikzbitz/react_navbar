import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import {Route, Routes} from "react-router-dom"


function App() {
  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
