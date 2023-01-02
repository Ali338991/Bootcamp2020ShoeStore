import Navbar from "./component/Navbar";
import Launch from "./component/Launch";
import LaunchIndex from "./component/LaunchIndex";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanunchShoe from "./component/LanunchShoe";
import NotFound from "./component/NotFound";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/launch" element={<LaunchIndex />} />
          <Route path=":slug" element={<LanunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
