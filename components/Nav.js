import { Fragment, useState, useEffect } from 'react'
import { Button } from "./button/Button";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from "next/link";
import Image from "next/image";
import {
    Alert,
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    Snackbar,
    TextField,
  } from "@mui/material";
import {
    useForgotPasswordMutation,
    useLoginMutation,
    useRegisterMutation,
} from "../redux/features/allSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, userState } from "../redux/features/authSlice";
import { useRouter } from "next/router";

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const user = useSelector(userState);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [openForget, setOpenForget] = useState(false);
    const [openReset, setOpenReset] = useState(false);
    const [pop, setpop] = useState(true);

    const [button1, setButton1] = useState(true);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
        console.log('====================================');
        console.log('email send');
        console.log('====================================');
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseForget = () => setOpenForget(false);
    const handleOpenForget = () => setOpenForget(true);

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
    const handleRegisterChange = (e) => {
        setRegisterData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleRegisterSubmit = async () => {
        const response = await registerFunction(registerData);
        console.log("Register Response", response);
        if (response?.data?.success) {
            dispatch(login(response.data));
            setOpen(false);
            setOpen2(false);
        }
    };

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
        if (response?.data?.success) {
            dispatch(login(response.data));
            openMsg(response?.data?.message);
            setOpen(false);
            setOpen2(false);
            if (response?.data?.user?.isAdmin) {
                router.push("/admin/Dashboard");
            }
            // Show Error message
        } else {
            openMsg(response?.error?.data?.message, "error");
        }
    };

    const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
    const [forgetPasswordFunction, forgetPasswordResponse] =
        useForgotPasswordMutation();

    useEffect(() => {
        if (forgetPasswordResponse?.isSuccess) {
            openMsg(forgetPasswordResponse?.data?.message);
            setOpen(false);
            setOpen2(false);
            handleCloseForget();
        }
        if (forgetPasswordResponse?.error) {
            openMsg(forgetPasswordResponse?.error?.data?.message, "error");
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
        <Disclosure as="nav" className="bg-gray-800">
            
            {({ open }) => (

                <>
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
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                

                                {/* Profile dropdown */}
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                // className={`${styles.nav_item}`}
                                onClick={closeMobileMenu1}
                                >
                                    <div
                                    className="flex"
                                    >
                                        <div className="btn-mobile">
                                            {!user?.user && button1 && (
                                                <Button
                                                    buttonStyle="btn--primary btn--mobile"
                                                    buttonSize="btn--medium"
                                                onClick={handleClickOpen}
                                                >
                                                    Login
                                                </Button>
                                            )}
                                        </div>
                                        <div className="btn-mobile">
                                           {!user?.user && button1 && (
                                                <Button
                                                    buttonStyle="btn--primary btn--mobile"
                                                    buttonSize="btn--medium"
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
                                                className="list-none  cursor-pointer font-normal"
                                            >
                                                {user?.user?.name}
                                            </motion.li>
                                        </Link>
                                        <Link href="/profile" className="rounded-full">
                                            <div className="cursor-pointer font-semibold aspect-square w-12 grid place-content-center ">
                                                {/* {user?.user?.name[0].toUpperCase()} */}
                                                <img
                                                    src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
                                                    alt=""
                                                    className="rounded-lg shadow-xl"
                                                />
                                            </div>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
