import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/pricing":
      Component = <Pricing />;
      break;
    case "/about":
      Component = <ClassEditor />;
      break;
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <div className="container">{Component}</div>
    </div>
  );
}

export default App;
