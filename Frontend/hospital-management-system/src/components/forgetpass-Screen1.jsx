import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ForgetPassword(){
    const [userEmail, setuserEmail]=useState('');
    const handleEmailhange=(e)=>{

    }
    return(
        <div>
            <div className='center bg-secondary border border-secondary border-2'>
              <Form>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                      <Form.Label >Enter Your Email</Form.Label>
                      <Form.Control value={userEmail} type="text" placeholder="Enter Username..." onChange={handleEmailhange} required />
                  </Form.Group>

                  <div className='text-center'>
                      <Button variant="primary" type="submit" className='bg-dark rounded-pill'>Send Code</Button>
                  </div>
              </Form>
            </div>
        </div>
    )
}

export default ForgetPassword;