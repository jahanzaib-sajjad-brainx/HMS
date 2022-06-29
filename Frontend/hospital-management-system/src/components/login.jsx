import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Link from 'react-router-dom'

function LoginPage(props) {
    const [userName, setuserName]=useState('');
    const [userPassword, setUserPassword]=useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    const handleUsernameChange=(e)=>{
        setuserName(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setUserPassword(e.target.value);
    }

    const handleLogin = (e) => {
      e.preventDefault();
    
      try {
        axios.post('/user/verify-user',{
          username: userName,
          password: userPassword
        })
         .then(function (response) {
            if (response.data.Status === "found") {
              localStorage.setItem("uname", response.data.uname)

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
                      <Form.Label >User Name</Form.Label>
                      <Form.Control value={userName} type="text" placeholder="Enter Username..." onChange={handleUsernameChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={userPassword} type="password" placeholder="Password" onChange={handlePasswordChange} required />
                  </Form.Group>

                  {/* conditional rendering on login button */}
                  {invalidCredentials && <p className='text-danger'>Invalid username or password!</p>}

                  <div className='text-center'>
                      <Button variant="primary" type="submit" className='bg-dark rounded-pill'>Login</Button>
                      
                      {/* <Link to="/forgetPassword"></Link><div className='my-3 text-light'>Forget your password?</div><Link/> */}
                  </div>
              </Form>
          </div>
      </div>
  );
}

export default LoginPage;