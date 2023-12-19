import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Student from "./components/Student";
import Login from "./components/Login";
import StudentInfo from "./components/StudentList";
import Todo from "./components/ListTask";
import TaskList from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <Student/>
        <StudentInfo/>
        <TaskList/>
    </div>
  );
}

export default App;
