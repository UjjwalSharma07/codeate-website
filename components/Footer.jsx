import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "../public/logo/Codeate logo/codeate.png";
import { FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Link href="/">
              <Image
                src={logoWhite}
                height="50px"
                width="200px"
                alt=""
                className="mt-4 w-20"
              />
              </Link>
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                Enabling community led peer to peer learning like never before!
              </p>
              <div className="flex mt-8 space-x-6 text-white">
                <a
                  className="text-white text-xl"
                  href="https://chat.whatsapp.com/EY3a4d5UXZx55Sr9KmQmji"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="text-white text-xl"
                  href="https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  className="text-white text-xl"
                  href="https://discord.com/invite/v4vZBMt9hQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <FaDiscord />
                </a>

                <a
                  className="text-white text-xl"
                  href="https://www.linkedin.com/company/code8-connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-white">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link href="/">
                    <a className="hover:opacity-75">About</a>
                  </Link>
                  <Link href="/privacy_policy">
                    <a className="hover:opacity-75">Privacy Policy</a>
                  </Link>
                  <Link href="/terms_and_condition">
                    <a className="hover:opacity-75">Terms & Conditions</a>
                  </Link>
                  <Link href="/contact">
                    <a className="hover:opacity-75">Contact Us</a>
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link className="hover:opacity-75" href="/build">
                    <a> Build </a>
                  </Link>
                  <Link className="hover:opacity-75" href="/learn">
                    <a>Learn </a>
                  </Link>
                  <Link className="hover:opacity-75" href="/community">
                    <a>Community </a>
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <Link className="hover:opacity-75" href="/Faqs">
                    <a> FAQs </a>
                  </Link>
                  {/* <Link className="hover:opacity-75" href="/chat">
                    <a> Live Chat </a>
                  </Link> */}
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">Connect With Us!</p>
                <br />
                <p>
                  <p className="font-medium text-white"> Email: </p>{" "}
                  <a
                    href="mailto:contact.us@codeate.in"
                    className="text-gray-500"
                  >
                    contact.us@codeate.in
                  </a>
                </p>
                <br />
                <p>
                  <p className="font-medium text-white"> Phone </p>{" "}
                  <a href="dial:+919182567700" className="text-gray-500">
                    +91 91825 67700
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-white">© 2023 Codeate</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
