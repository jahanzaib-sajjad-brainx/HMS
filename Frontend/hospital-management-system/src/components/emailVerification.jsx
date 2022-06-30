import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from 'react-router-dom'


function EmailVerification(){
    const [userEmail, setuserEmail]=useState('');
    const [invalidEmail, setinvalidEmail]=useState(false)
    const navigate=useNavigate();

//  #Function 1
    const handleEmailhange=(e)=>{
        setuserEmail(e.target.value);
    }
   
// #Function 2
    const handleSendcode=(e)=>{
        e.preventDefault();
        try {
          axios.post('/user/send-email-code',{
            useremail: userEmail,
          })
           .then(function (response) {
            console.log(response.data)
              if (response.data.status === "found") {
                navigate("../verifyEmailcode", { replace: true });
                localStorage.setItem("userEmail", response.data.uemail)
  
              }
              else {
                  setinvalidEmail(true)
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
    return(
        <div className="center-div">
            <div className='center bg-secondary border border-secondary border-2'>
              <Form onSubmit={handleSendcode}>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                      <Form.Label >Enter Your Email</Form.Label>
                      <Form.Control value={userEmail} type="email" placeholder="Enter Email..." onChange={handleEmailhange} required />
                  </Form.Group>
                        {invalidEmail && <div className="text-danger">This email has not been registred!</div>}
                  <div className='text-center'>
                      <Button variant="primary" type="submit" className='bg-dark rounded-pill my-2'>Send Code</Button>
                  </div>
              </Form>
            </div>
        </div>
    )
}

export default EmailVerification;