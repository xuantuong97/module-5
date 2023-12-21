import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Student from "./components/Student";
import Login from "./components/Login";
import StudentInfo from "./components/StudentList";
import Todo from "./components/ListTask";
import TaskList from "./components/ListTask";
import StudentList from "./components/StudentList";
import Counter from "./components/Count";

import ContactForm from "./components/Form";
import MedicalForm from "./components/KhaiBaoYTe";


function App() {
  return (
    <div className="App">
      <MedicalForm/>
        {/*<TaskList/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
