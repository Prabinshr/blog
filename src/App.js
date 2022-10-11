import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setting from "./pages/Setting";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Single/>
    </div>
  );
}

export default App;
