import React from 'react'
import img221 from '../../../assets/221.png'
import Image from 'next/image'
import { TextField } from '@mui/material'
import {useFormik} from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import { LoginValidation, emailValidate, usernameValidate } from '../../../helper/Validate'
import { useAuthStore } from '../../../store1/store1'
// import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hook/fetch.hook'
import { verifyPassword } from '../../../helper/helper'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'


 

function Login() {

  const router = useRouter();
  // const navigation = useNavigate()

  // const navigate = useNavigate()
  const { username } = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError }] = useFetch(`user/${username}`)

  const setUsername = useAuthStore(state => state.setUsername);
  // const setAuth = useIsAuth(state=>state.setAuth)

  const formik = useFormik({
    initialValues : {
      username: '',
      password: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      setUsername(values.username);

      let loginPromise = verifyPassword({ username: values.username, password : values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully</b>,
        error : <b>Password Not Match!</b>
      })

      
      // setAuth(true);
      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        router.push('/admin/Dashboard')
        // navigation.navigate('/admin/Dashboard')
      })
    }
  
  })

  // if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  // if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>


  return (

    <>
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <Toaster  position='top-center' reverseOrder={false} />
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <Image
              // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              src={img221}
              className="w-full"
              alt="Login image" />
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">

            <form onSubmit={formik.handleSubmit}>

            <TextField
            {...formik.getFieldProps('username')}
              className='bg-white rounded-md'
              name="username"
              label="username"
              fullWidth
              style={{ margin: "15px 0px" }}
            />

            <TextField
             {...formik.getFieldProps('password')}
              className='bg-white rounded-md' 
              name="password"
              label="password"
              fullWidth
              style={{ margin: "10px 0px" }}
            />


              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
         
                </div>
                <Link
                  href="/2412r23rc2qr4t4reyhgtu7698-089p9poijluygjygfhrty5486709ti7judtryerfqwe124e32rxqwedefrey566u78o90%5B809u%3Biolukyjtrhfgefetrweythfgbf/Login/UserName"
                  className="text-primary transition text-blue-400 duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Forgot password?</Link>
              </div>

              {/* <!-- Submit button --> */}
              <button
            type="submit"
            // style={{backgroundColor: "#3b5998"}}
            className="bg-blue-600 inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>

              {/* <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                {/* <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  
                </p> */}
              {/* </div> */} 

              {/* <a
                className="bg-blue-500 mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                // style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                {/* <!-- Facebook --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook */}
              {/* </a> */} 
              {/* <a
                className="bg-blue-500 mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                // style={{backgroundColor: "#55acee"}}
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                {/* <!-- Twitter --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Continue with Twitter */}
              {/* </a> */} 
              {/* <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                Don't have an account?
                <a
                  href="/Login/Signup"
                  className="text-danger transition ml-2 text-blue-500 duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >Register</a
                > */}
              {/* </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}

export default Login
