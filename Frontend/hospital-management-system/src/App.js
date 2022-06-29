import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import ForgetPassword from "./components/forgetpass-Screen1";
import LoginPage from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
