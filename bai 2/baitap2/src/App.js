import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Student from "./components/Student";
import Login from "./components/Login";
import StudentInfo from "./components/StudentList";
import Todo from "./components/ListTask";
import TaskList from "./components/ListTask";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <Student/>
        <StudentList/>
        <TaskList/>
    </div>
  );
}

export default App;
