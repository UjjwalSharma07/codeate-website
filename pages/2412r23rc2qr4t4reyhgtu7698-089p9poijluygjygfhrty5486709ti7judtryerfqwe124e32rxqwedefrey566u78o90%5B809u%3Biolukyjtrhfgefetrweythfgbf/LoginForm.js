// components/LoginForm.js
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

import { verifyPassword } from '../../helper/helper';
import { usernameValidate } from '../../helper/Validate';

function LoginForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username: values.username,
        password: values.password,
      });

      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        router.push('/admin/Dashboard');
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mb-6">
        <TextField
          {...formik.getFieldProps('username')}
          className="bg-white rounded-md"
          name="username"
          label="Username"
          fullWidth
        />
      </div>

      <div className="mb-6">
        <TextField
          {...formik.getFieldProps('password')}
          className="bg-white rounded-md"
          name="password"
          label="Password"
          fullWidth
          type="password"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 w-full rounded text-white px-7 py-2.5 text-sm font-medium uppercase transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
