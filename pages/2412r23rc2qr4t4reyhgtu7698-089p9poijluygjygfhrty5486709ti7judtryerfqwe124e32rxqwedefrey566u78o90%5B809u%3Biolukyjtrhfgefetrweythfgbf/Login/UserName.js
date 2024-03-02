import React, { useEffect } from 'react'
import Link from 'next/link';
// import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { userValidate, usernameValidate } from '../../../helper/Validate'
import { useAuthStore } from '../../../store1/store1'

import styles from '../../../styles/Login/Username.module.css';
import { useRouter } from 'next/router';

export default function Username() {

    const router = useRouter()

//   const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : userValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      setUsername(values.username);
    //   navigate('/password')
    router.push('/2412r23rc2qr4t4reyhgtu7698-089p9poijluygjygfhrty5486709ti7judtryerfqwe124e32rxqwedefrey566u78o90%5B809u%3Biolukyjtrhfgefetrweythfgbf/Login/Reset')
    }
  })

  return (
    <div className="container mx-auto bg-black text-white">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold text-white'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  {/* <img src={avatar} className={styles.profile_img} alt="avatar" /> */}
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <button className={styles.btn} type='submit'>Let&apos;s Go</button>
              </div>

              <div className="text-center py-4">
                {/* <span className='text-gray-500'>Not a Member <Link className='text-red-500' href="/register">Register Now</Link></span> */}
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}