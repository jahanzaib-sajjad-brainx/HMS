import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import ChangePassword from "./components/changepassword";
import EmailcodeVerification from "./components/emailcodeVerification";
import EmailVerification from "./components/emailVerification";
import LoginPage from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/forgetPassword" element={<EmailVerification/>}/>
          <Route path="/verifyEmailcode" element={<EmailcodeVerification/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
