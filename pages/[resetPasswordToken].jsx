import { Alert, FilledInput, IconButton, InputAdornment, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useResetPasswordMutation } from "../redux/features/allSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
  const router = useRouter();
  const resetPasswordToken = router.query.resetPasswordToken;

  // State to store the password
  const [password, setPassword] = useState("");
  // State to store the confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  // State to store the error message
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const [resetPasswordFunction, resetPasswordResponse] =
    useResetPasswordMutation();

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Validate the password and confirm password
    if (!password || !confirmPassword) {
      setError("Please enter your password and confirm password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Send the reset password request to the server
    resetPasswordFunction({
      resetPasswordToken,
      password,
      confirmPassword,
    }).then(() => {
      router.push("/");
    });
  };

  const [msg, setMsg] = useState({ message: "", theme: "success" });
  const openMsg = (message, theme = "success") => {
    setMsg({
      message,
      theme: theme ? theme : "success",
    });

    handleClick();
  };
  const [openAlert, setOpenAlert] = useState(false);
  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    if (resetPasswordResponse?.isSuccess) {
      openMsg(resetPasswordResponse?.data?.message);
    }
    if (resetPasswordResponse?.error) {
      openMsg(resetPasswordResponse?.error?.data?.message, "error");
    }
  }, [resetPasswordResponse]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border px-10 max-w-md mx-auto my-32 rounded-lg shadow py-10"
    >
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={msg.theme}
          sx={{ width: "100%" }}
        >
          {msg.message}
        </Alert>
      </Snackbar>

      <div className="mb-5">
        <label
          className="block font-bold text-gray-700 text-2xl mb-2"
          htmlFor="password"
        >
          New Password
        </label>
        {/* <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
          id="password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
         <FilledInput
                name="password"
                placeholder="Password"
                style={{ width: '100%', marginBottom: '0px', marginTop: '0px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                value={password}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility />  : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
      </div>
      <div className="mb-5">
        <label
          className="block font-bold text-gray-700 text-2xl mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        {/* <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}
         <FilledInput
                name="password"
                placeholder="Password"
                style={{ width: '100%', marginBottom: '0px', marginTop: '0px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                value={confirmPassword}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                       {showPassword2 ? <Visibility />  : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
        {error && <div className="mb-5 text-red-500">{error}</div>}
      </div>
      <div className="mb-5">
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
