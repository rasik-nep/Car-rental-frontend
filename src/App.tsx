import Home from "./pages/Home";
// import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/page/admin" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
export default App;