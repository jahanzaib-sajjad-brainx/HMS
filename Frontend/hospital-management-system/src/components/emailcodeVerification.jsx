import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EmailcodeVerification(){
    const [emailCode, setemailCode]=useState('');
    const [invalidCode, setinvalCode]=useState(false)
    const navigate=useNavigate();


    const handleCodechange=(e)=>{
        setemailCode(e.target.value);
    }

    //  Function 2
    const verifyCode=(e)=>{
        e.preventDefault();
        try {
          axios.post('/user/verify-code',{
            code: emailCode,
          })
           .then(function (response) {
            console.log(response.data)
              if (response.data === "verified") {
                navigate("../changePassword", { replace: true });
  
              }
              else {
                  setinvalCode(true)
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
              <Form onSubmit={verifyCode}>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                      <Form.Label >Please Enter 4-digit Code sent to your email</Form.Label>
                      <Form.Control value={emailCode} type="text" placeholder="XXXX" onChange={handleCodechange} required />
                  </Form.Group>
                        {invalidCode && <div className="text-danger">Incorret Code!Try again!</div>}
                  <div className='text-center'>
                    <Button variant="primary" type="submit" className='bg-dark rounded-pill my-2'>Enter</Button>
                  </div>
              </Form>
            </div>
        </div>
    )
}

export default EmailcodeVerification;