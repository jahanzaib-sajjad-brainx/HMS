import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ChangePassword(){
    const [password, setpassword]=useState('');
    const [confirmPassword, setconfirmPassword]=useState('');
    const [passwordMismatch, setpasswordMismatch]=useState(false)
    const navigate=useNavigate()

    // Function 01
    const handlePasswordChange=(e)=>{
        setpassword(e.target.value);
    }
    const handleConfirmpasswordChange=(e)=>{
        setconfirmPassword(e.target.value);
    }
    // Function 2
    const handlepasswordChange=(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
           
            navigate('/',{replace:true})
            try {
                axios.post('/user/update-password',{
                  userpassword:password ,
                  useremail: localStorage.getItem("userEmail")
                })
                 .then(function (response) {
                    console.log(response.data)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
              catch (error) {
                    console.log("error: ",error)
              } 
        }
        else{
                setpasswordMismatch(true)
        }
    }
    return(
        <div className="center-div">
            <div className='center bg-secondary border border-secondary border-2'>
              <Form onSubmit={handlepasswordChange}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control value={password} type="password" placeholder="Password" onChange={handlePasswordChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control value={confirmPassword} type="password" placeholder="Confirm-Password" onChange={handleConfirmpasswordChange}required/>
                    </Form.Group>

                    {passwordMismatch && <div className="text-danger">Password don't match!</div>}

                     <div className='text-center'>
                      <Button variant="primary" type="submit" className='bg-dark rounded-pill my-2'>Enter</Button>
                    </div>
              </Form>
            </div>
        </div>
    )
}

export default ChangePassword;