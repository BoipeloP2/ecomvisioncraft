import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from "react-router-dom"


const ForgotPassword = () => {
  return (
    <>

     <BreadCrumb title="Forogot Password"/>


     
    <div className="login-wrapper home-wrapper-2 py-5 ">
       <div className="container-xxl">
       <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center'>Reset Your Password</h3>
                    <p className="text-center mb-3 mt-2">We will send you an email to reset your password</p>
                    <form action="" className='d-flex flex-column gap-30'>
                        <div>
                            <input type="email" name="email" placeholder='Email' className='form-control'/>
                        </div>
                       
                        <div className='mt-2'>
                            
                            <div className="d-flex justify-content-center flex-column gap-15 mt-2 align-items-center">
                                <button type='submit' className='button border-0'>Send</button>
                                <Link to="/login">Cancel  </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </div>
    
    </>
  )
}

export default ForgotPassword