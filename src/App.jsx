import "./App-dark.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Header } from "./Components/header/Header";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />}>
          <Route path=":nav" element={<Blogs />}>
            <Route path=":string" element={<Blogs />} >
              <Route path=":subnav" element={<Blogs />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

