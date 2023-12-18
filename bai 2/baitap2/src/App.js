import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Student from "./components/Student";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Student/>
        <Login/>
    </div>
  );
}

export default App;
