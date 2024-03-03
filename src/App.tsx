import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected";

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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Protected />} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route >
      </Routes>
    </Router>
  );
}
export default App;