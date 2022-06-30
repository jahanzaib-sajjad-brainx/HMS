import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {Link} from 'react-router-dom'

function LoginPage(props) {
    const [userEmail, setuserEmail]=useState('');
    const [userPassword, setUserPassword]=useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    const handleEmailChange=(e)=>{
        setuserEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setUserPassword(e.target.value);
    }

    const handleLogin = (e) => {
      e.preventDefault();
    
      try {
        axios.post('/user/verify-user',{
          useremail: userEmail,
          password: userPassword
        })
         .then(function (response) {
            if (response.data.Status === "found") {
              localStorage.setItem("userEmail", response.data.uemail)

            }
            else {
                setInvalidCredentials(true)
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      catch (error) {
            console.log("error: ",error)
      } 
    }
  return (
      <div className='center-div'>
          <div> <h1>Login Page </h1></div>
          <div className='center bg-secondary border border-secondary border-2'>
              <Form onSubmit={handleLogin}>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                      <Form.Label >Email</Form.Label>
                      <Form.Control value={userEmail} type="Email" placeholder="Enter Email..." onChange={handleEmailChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={userPassword} type="password" placeholder="Password" onChange={handlePasswordChange} required />
                  </Form.Group>

                  {/* conditional rendering on login button */}
                  {invalidCredentials && <p className='text-danger'>Invalid username or password!</p>}

                  <div className='text-center'>
                      <Button variant="primary" type="submit" className='bg-dark rounded-pill'>Login</Button>
                      
                      <Link to="/forgetPassword"><div className='my-3 text-light'>Forget your password?</div></Link>
                  </div>
              </Form>
          </div>
      </div>
  );
}

export default LoginPage;