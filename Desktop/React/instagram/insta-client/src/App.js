
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
     
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
