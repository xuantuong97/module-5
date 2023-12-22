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
import './css_case/bootstrap.min.css';
import './css_case/font-awesome.min.css';
import './css_case/elegant-icons.css';
import './css_case/flaticon.css';
import './css_case/owl.carousel.min.css';
import './css_case/nice-select.css';
import './css_case/jquery-ui.min.css';
import './css_case/magnific-popup.css';
import './css_case/slicknav.min.css';
import './css_case/style.css';
import 'https://fonts.googleapis.com/css?family=Lora:400,700&display=swap';
import 'https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap';
import Header from "./component_case/Header";

function App() {
  return (
    <div className="App">
      <Header/>
        {/*<TaskList/>*/}
        {/*<Counter/>*/}
    </div>
  );
}

export default App;
