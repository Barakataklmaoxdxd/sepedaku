import Layout from "./component/layout/Layout.jsx";
import About from "./component/page/about.jsx";
import Gravel from "./component/page/Gravel.jsx";
import MTB from "./component/page/MTB.jsx";
import Roadbike from "./component/page/Roadbike.jsx";
import Home from "./component/page/Home.jsx";
import PojokFixie from "./component/page/PojokFixie.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gravel" element={<Gravel />} />
          <Route path="roadbike" element={<Roadbike/>} />
          <Route path="mtb" element={<MTB />} />
          <Route path="about" element={<About />} />
          <Route path="pojokFixie" element={<PojokFixie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
