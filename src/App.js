import "./styles.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ClassEditor from "./pages/ClassEditor";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import AssignmentTracker from "./pages/AssignmentTracker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assignmentTracker" element={<AssignmentTracker />} />
          <Route path="/classEditor" element={<ClassEditor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
