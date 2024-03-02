import React, { useEffect, useState } from "react";
import { Button } from "./button/Button";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "../public/logo/Codeate logo/codeate.png";
import styles from "../styles/Navbar.module.css";
import toast, { Toaster } from "react-hot-toast";
import {
  Alert,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import {
  useForgotPasswordMutation,
  useLoginMutation,
  useRegisterMutation,
} from "../redux/features/allSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, newuserState, userState } from "../redux/features/authSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import SignUpEmailTOUser from "../email/SignUpEmailTOUser";
import sendEmail from "../email/Email";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Navbar = () => {
  const user = useSelector(userState);
  const Updatedser = useSelector(newuserState);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openForget, setOpenForget] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [pop, setpop] = useState(true);

  const [button1, setButton1] = useState(true);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setOpen2(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseForget = () => setOpenForget(false);
  const handleOpenForget = () => {
    setOpen(false);
    setOpenForget(true)


  };
  const handleCloseReset = () => setOpenReset(false);
  const handleOpenReset = () => setOpenReset(true);

  useEffect(() => {
    // const showButton1 = () => {
    //   makes button dissapear when width is less than 960
    //   if (window.innerWidth <= 960) {
    //     setButton1(false);
    //   } else {
    //     setButton1(true);
    //   }
    // };
    // window.addEventListener("resize", showButton1);
  }, []);

  // Dropdown1
  const [click1, setClick1] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick1 = () => setClick1(!click1);
  const closeMobileMenu1 = () => {
    setClick1(false);
  };

  const extendElement1 = () => {
    dropdown1 ? setDropdown1(false) : setDropdown1(true);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  // Registration
  const [registerFunction, registerResponse] = useRegisterMutation();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegisterChange = async (e) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async () => {
    try {
      // 1. Register the user
      const response = await registerFunction(registerData);
      console.log(response);
      // Check if registration was successful
      if (response?.data) {
        // 2. Dispatch a login action
        dispatch(login(response.data));

        // 3. Show a success toast message
        toast.success("Registration Successful!");

        // 4. Close any modals (if needed)
        setOpen(false);
        setOpen2(false);

        // 5. Send welcome emails
        await sendWelcomeEmails(registerData);
      } else {
        // Handle registration failure, show an error message or take appropriate action
        // For example:
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any errors that occurred during registration
      console.error("Registration Error:", error);
    }
  };

  const sendWelcomeEmails = async (userData) => {
    try {
      const { email, name } = userData;

      // Send a welcome email to the user
      await sendEmail({
        to: email,
        subject: `Welcome to our platform ${name} !`,
        message: generateUserWelcomeMessage(name),
      });

      // Send a welcome email to the admin
      await sendEmail({
        to: "contact.code8@gmail.com",
        subject: `New User Registration - ${name}`,
        message: generateAdminWelcomeMessage(name),
      });
    } catch (error) {
      // Handle any errors that occurred while sending emails
      console.error("Email Sending Error:", error);
    }
  };

  const generateUserWelcomeMessage = (name) => `
    <p>
      Dear ${name},<br/><br/>
  
      We are delighted to welcome you to our platform!<br/><br/>
  
      Thank you for choosing to sign up and become a part of the codeate fam.<br/><br/>
  
      ...
      
      Best regards,<br/>
      Team Codeate
    </p>
  `;

  const generateAdminWelcomeMessage = (name) => `
    <p>
      Dear Admin,<br/><br/>
  
      We are delighted to welcome ${name} to our platform!<br/><br/>
  
      Let's build cool stuff together 🚀🚀<br/><br/>
  
      ...
      
      Best regards,<br/>
      Team Codeate
    </p>
  `;

  // Login
  const [loginFunction, loginResponse] = useLoginMutation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLoginSubmit = async () => {
    const response = await loginFunction(loginData);
    console.log("Login Response", response.data);

    let email = loginData.email;

    await sendEmail({
      to: email,
      subject: `SignIn Confirmation`,
      message: `
       <p> 
     Dear ${registerData.name},\n\n <br/> <br/> 
     We are writing to confirm that you have successfully logged in on the Codeate platform.\n\n <br/> <br/> 

    Best regards, <br/> 
    Team Codeate
       </p>
     `,
    });

    if (response?.data?.success) {
      dispatch(login(response.data));

      toast.success("Successfully Logged In!");
      setOpen(false);
      setOpen2(false);
      if (response?.data?.user?.isAdmin) {
        router.push("/admin/Dashboard");
      }
      // Show Error message
    } else {
      toast.error(response?.error?.data?.message);
    }
  };

  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const [forgetPasswordFunction, forgetPasswordResponse] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (forgetPasswordResponse?.isSuccess) {
      toast.success(forgetPasswordResponse?.data?.message);
      setOpen(false);
      setOpen2(false);
      handleCloseForget();
    }
    if (forgetPasswordResponse?.error) {
      toast.error(forgetPasswordResponse?.error?.data?.message, "error");
    }
  }, [forgetPasswordResponse]);

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

  return (
    <>
      <div className="z-[999] bg-black-900  px-24 md:backdrop-blur-sm back fixed top-0 w-full md:bg-opacity-40 bg-opacity-100 bg-gradient-to-tl to-amber-800/10 group duration-500 card-animation hover:border-black/80 via-slate-600 from-black/10">
        <Toaster />
        <nav className={`flex justify-between px-10 py-2`}>
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

          <Link href="/">
            <a>
              <div className="mt-5 md:mt-1" onClick={closeMobileMenu1}>
                <Image
                  src={logoWhite}
                  height="50px"
                  width="200px"
                  alt=""
                  className="mt-4 w-20"
                />
              </div>
            </a>
          </Link>

          <div className={`${styles.menu_icon}`} onClick={handleClick1}>
            {/* <p className={click1 ? "fas fa-times z-20" : "fas fa-bars bg-transparent"} /> */}
            <AiOutlineMenu
              className={click1 ? "hidden" : "block text-white m-4"}
            />
          </div>

          {/* <div className={`${styles.menu_c}`}> */}
          <ul
            className={`${styles.nav_menu} ${click1 ? styles.active : styles.hidden
              }`}
          >
            <div className={`${styles.menu_icon}`} onClick={handleClick1}>
              {/* <p className={click1 ? "fas fa-times z-20" : "fas fa-bars bg-transparent"} /> */}

              <AiOutlineClose
                className={click1 ? "block text-white m-4" : "hidden "}
              />
            </div>
            <motion.li
              whileHover={{ scale: 1.02 }}
              className={`${styles.nav_item}`}
              onClick={extendElement1}
            >
              <Link href="/build">
                <a>
                  <div
                    className={`${styles.nav_links} mt-2 font-semibold`}
                    onClick={closeMobileMenu1}
                  >
                    Build
                  </div>
                </a>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.02 }}
              className={`${styles.nav_item}`}
              onClick={closeMobileMenu1}
            >
              <Link href="/learn">
                <a>
                  <div className={`${styles.nav_links} mt-2 font-semibold`}>
                    Learn
                  </div>
                </a>
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.02 }}
              className={`${styles.nav_item}`}
              onClick={closeMobileMenu1}
            >
              <Link href="/community">
                <a>
                  <div className={`${styles.nav_links} mt-2 font-semibold`}>
                    Community
                  </div>
                </a>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.02 }}
              className={`${styles.nav_item}`}
              onClick={closeMobileMenu1}
            >
              <Link href="/consultancy">
                <a>
                  <div className={`${styles.nav_links} mt-2 font-semibold`}>
                    Consultancy
                  </div>
                </a>
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.02 }}
              className={`${styles.nav_item}`}
              onClick={closeMobileMenu1}
            >
              <div className={`${styles.login_sign}`}>
                <div className="btn-mobile mt-4">
                  {(Updatedser?.newuser || !user?.user) && button1 && (
                    <Button
                      buttonStyle="btn--primary btn--mobile"
                      buttonSize="btn--small"
                      className="mr-2"
                      onClick={handleClickOpen}
                    >
                      Login
                    </Button>
                  )}
                </div>
                <div className="btn-mobile mt-4">
                  {!user?.user && button1 && (
                    <Button
                      buttonStyle="btn--primary btn--mobile"
                      buttonSize="btn--small"
                      onClick={handleClickOpen2}
                    >
                      Sign Up
                    </Button>
                  )}
                </div>
              </div>
            </motion.li>
            {user?.user && (
              <>
                <Link href="/profile">
                  <motion.li
                    whileHover={{ scale: 1.02 }}
                    className="list-none cursor-pointer font-normal mt-2"
                  >
                    {Updatedser?.newuser?.name ? Updatedser?.newuser?.name : user?.user?.name}
                  </motion.li>
                </Link>
                <Link href="/profile" className="rounded-full mt-4">
                  <div className="cursor-pointer mt-2 font-semibold aspect-square w-12 grid place-content-center  ">
                    {/* {user?.user?.name[0].toUpperCase()} */}
                    <img
                      src={Updatedser?.newuser?.profile ? Updatedser?.newuser?.profile : "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="}
                      alt="profile"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </Link>
              </>
            )}
          </ul>

          {/* {pop && (
          <div className={`${styles.Popup}`}>
            <div className={`${styles.popup_head}`}>
              <div className="close-button">
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    setpop(false);
                  }}
                ></i>
              </div>
            </div>
            <div className={`${styles.popup_body}`}>
              <p>Let opportunities land in your inbox.</p>
              <div onClick={handleClickOpen2} style={{ cursor: "pointer" }}>
                Sign up now for free.{" "}
              </div>
            </div>
          </div>
        )} */}
        </nav>
        <Dialog
          open={open2}
          style={{marginTop:40}}
          onClose={handleClose2}
          fullWidth={true}
          maxWidth="sm"
        >
           <Toaster />
          <DialogContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={handleClose2}
                className="text-xl font-bold lg:mr-0 mr-5"
                style={{ cursor: "pointer" }}
              >X</button>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="lg:font-bold font-medium text-[16px] lg:mr-[1px]"
                  style={{
                    fontFamily: "Poppins",
                    // fontWeight: "bold",
                    // fontSize: "16px",
                    color: "#000",
                    // marginRight: "12px",
                  }}
                >
                  Already have an account?
                </div>
                <Button
                  onClick={handleClickOpen}
                  buttonStyle="btn--primary"
                  buttonSize="btn--small"
                >
                  Sign In
                </Button>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <FilledInput
                name="name"
                placeholder="Full Name"
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                onChange={handleRegisterChange}
                fullWidth
                margin="dense"
              />
              <FilledInput
                name="email"
                type="email"
                placeholder="Email ID"
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                onChange={handleRegisterChange}
                fullWidth
                margin="dense"
              />
              {/* <InputLabel htmlFor="filled-adornment-password">Password</InputLabel> */}
              <FilledInput
                name="password"
                placeholder="Password"
                label="Password"
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleRegisterChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> :  <VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                }
              />
              {/* <TextField
                name="password"
                type="password"
                label="Password"
                onChange={handleRegisterChange}
                // endAdornment={
                 
                // }
                fullWidth
                margin="dense"
              >  
              <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            </TextField> */}
              <FilledInput
                name="phoneNumber"
                type="phone"
                placeholder="Phone No."
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                onChange={handleRegisterChange}
                fullWidth
                margin="dense"
              />
            </div>

            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--small"
              style={{ marginTop: "20px" }}
              onClick={handleRegisterSubmit}
            >
              Sign Up
            </Button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            ></div>
          </DialogContent>

          <DialogActions></DialogActions>
        </Dialog>


        <Dialog
          open={open}
          style={{marginTop:40}}
          onClose={handleClose}
          fullWidth={true}
          maxWidth="sm"
        >
           <Toaster />
          <DialogContent>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="backdrop-blur-lg"
            >
              <span>
                <button
                  onClick={handleClose}
                  className="text-black font-bold hover:text-gray-700"
                >
                  X
                </button>
              </span>
              <span style={{ display: "flex" }}>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    marginRight: "1px",
                    fontSize: "16px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    color: "#000000",
                  }}
                >
                  New to Codeate ?
                </div>
                <Button
                  onClick={handleClickOpen2}
                  buttonStyle="btn--primary sizee btn--mobile"
                  buttonSize="btn--small"
                >
                  Sign Up
                </Button>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <span
                style={{
                  margin: "10px 0px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "35px",
                  lineHeight: "72px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Welcome Back
              </span>
            </div>

            <div>
              <FilledInput
                name="email"
                type="email"
                placeholder="Email"
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                label="Email"
                onChange={handleLoginChange}
                fullWidth
                // style={{ margin: "15px 0px" }}
              />

              <FilledInput
                name="password"
                placeholder="Password"
                style={{ width: '100%', marginBottom: '7px', marginTop: '7px', backgroundColor: 'white', border: 'black', borderStyle: 'solid', borderRadius: '2px', borderWidth: '1px' }}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleLoginChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                }
              />

              {/* <TextField
                name="password"
                type="password"
                label="Password"
                onChange={handleLoginChange}
                fullWidth
                style={{ margin: "15px 0px 25px 0px" }}
              /> */}
              <button
                onClick={handleOpenForget}
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "36px",
                  display: "flex",
                  justifyContent: "end",
                  color: "#407BFF",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </button>
            </div>
            <Button
              buttonStyle="btn--primary sizee"
              buttonSize="btn--small"
              stylee="stylee"
              onClick={() => {
                handleLoginSubmit();
                // handleSubmitProjectToUser()
              }}
            >
              Login
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px 0px 0px",
              }}
            ></div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>

        <Dialog
          open={openForget}
          onClose={handleCloseForget}
          fullWidth={true}
          maxWidth="sm"
        >
           <Toaster />
          <DialogContent>
            <div className="flex justify-between">
              <span>
                <button
                  onClick={handleCloseForget}
                  className="text-gray-500 font-bold hover:text-gray-700"
                >
                  X
                </button>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-2xl font-semibold text-black my-4">
                Forget Password
              </span>
            </div>

            <div>
              <TextField
                label="Email ID"
                onChange={(e) => setForgetPasswordEmail(e.target.value.trim())}
                fullWidth
                className="mb-4 "
                style={{ margin: "15px 0px 25px 0px" }}
              />
              <Button
                buttonStyle="btn--primary sizee"
                buttonSize="btn--small"
                stylee="stylee"
                onClick={() => forgetPasswordFunction(forgetPasswordEmail)}
                className="p-4"
                style={{ margin: "15px 0px 25px 0px" }}
              >
                Submit
              </Button>
              <div className="flex justify-center items-center mt-4">
                <Button
                  buttonStyle="btn--outline sizee"
                  buttonSize="btn--small"
                  style={{ color: "#FFFFFF" }}
                  onClick={() => handleCloseForget()}
                >
                  Back to Login
                </Button>
              </div>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>

        <Dialog
          open={openReset}
          onClose={handleCloseReset}
          fullWidth={true}
          maxWidth="sm"
        >
           <Toaster />
          <DialogContent>
            <div className="flex justify-between">
              <span>
                <img
                  src="https://github.com/KapadiaShubham/Codeate-media/blob/master/images/x-mark%201.png?raw=true"
                  onClick={handleCloseReset}
                  className="cursor-pointer"
                  alt=""
                />
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-2xl font-semibold text-black my-4">
                Reset Password
              </span>
            </div>

            <div>
              <TextField label="Email" fullWidth className="mb-4" />
              <TextField
                label="New Password"
                type="password"
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Confirm New Password"
                type="password"
                fullWidth
                className="mb-8"
              />
              <Button
                buttonStyle="btn--primary sizee"
                buttonSize="btn--small"
                stylee="stylee"
                className="mb-4"
              >
                Reset Password
              </Button>
              <div className="flex justify-center items-center mt-4">
                <Button
                  buttonStyle="btn--outline sizee"
                  buttonSize="btn--small"
                  style={{ color: "#FFFFFF" }}
                >
                  Back to Login
                </Button>
              </div>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    </>
  );
};
