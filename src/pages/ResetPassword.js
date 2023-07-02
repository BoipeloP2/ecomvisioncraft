import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from "react-router-dom"

const ResetPassword = () => {
  return (
    <>
    <BreadCrumb title="Reset Password"/>

<div className="login-wrapper home-wrapper-2 py-5 ">
    <div className="container-">
    <div className="row">
        <div className="col-12">
            <div className="auth-card ">
                <h3 className='text-center mb-3'>Reset Password</h3>
                <form action="" className='d-flex flex-column gap-30'>
                <div>
                        <input type="password" name="password" placeholder='Password' className='form-control'/>
                    </div>
                    <div>
                        <input type="password" name="confirmpassword" placeholder='Confirm Password' className='form-control'/>
                    </div>
                    <div className='mt-2'>
                        <div className="d-flex justify-content-center gap-15 mt-2 align-items-center">
                            <button type="submit" className='button border-0'>Reset</button>
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

export default ResetPassword