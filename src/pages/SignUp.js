import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <>
    <BreadCrumb title="Sign Up"/>
    <div className="login-wrapper home-wrapper-2 py-5 ">
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center'>Sign Up</h3>
                    <form action="" className='d-flex flex-column gap-30'>
                    <div>
                            <input type="text" name="firsname" placeholder='First Name' className='form-control'/>
                        </div>
                        <div>
                            <input type="text" name="lastname" placeholder='Last Number' className='form-control'/>
                        </div>
                        <div>
                            <input type="tel" name="mobileno" placeholder='Phone Number' className='form-control'/>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder='Email' className='form-control'/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder='Password' className='form-control'/>
                        </div>
                        <div className='mt-2'>
                            <div className="d-flex justify-content-center gap-15 mt-2 align-items-center">
                                {/* <button type="submit"  className='button border-0'>Login</button> */}
                                <Link to="/signup" className='button signup'>Sign Up</Link>
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

export default SignUp