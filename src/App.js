import "./App.css";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
