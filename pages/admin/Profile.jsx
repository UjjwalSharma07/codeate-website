import React from "react";
import Sidebar from "../../Admin/components/Sidebar";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { useAuthStore } from "../../store1/store1";
import Logo from "../../assets/images/profile.png";
import { ImPencil2 } from "react-icons/im";
import Image from "next/image";

const Profile = () => {
  const user = useSelector(userState);
  const { username } = useAuthStore((state) => state.auth);
  if (!user?.user?.isAdmin && !username) return null;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
        <div className="flex items-center mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <button className="absolute top-0 right-0 bg-gray-300 text-gray-600 p-1 rounded-full shadow-md">
              <ImPencil2 />
            </button>
            <Image
              src={Logo}
              alt="image-profile"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-semibold">Jimmy Johnson</h1>
            <h3 className="text-gray-600">Front-end Developer</h3>
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-2">
            Edit Information{" "}
            <span className="ml-1">
              <ImPencil2 />
            </span>
          </h1>
        </div>
        <form action="" method="post">
          <div className="flex flex-col md:flex-row mb-4">
            <label htmlFor="FirstName" className="mb-2 md:mr-2">
              First Name:*
            </label>
            <input
              type="text"
              placeholder="Jimmy"
              className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="LastName" className="mb-2 md:mr-2 md:ml-4">
              Last Name:*
            </label>
            <input
              type="text"
              placeholder="Johnson"
              className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="Password" className="mb-2 md:mr-2 md:ml-4">
              Password:
            </label>
            <input
              type="password"
              placeholder="Change Password"
              className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <label htmlFor="Email" className="mb-2 md:mr-2">
              Email: *
            </label>
            <input
              type="email"
              placeholder="jimmyjohn43@gmail.com"
              className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="Phone" className="mb-2 md:mr-2 md:ml-4">
              Phone:
            </label>
            <input
              type="tel"
              placeholder="(+91) xxxxx-xxxxx"
              className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;