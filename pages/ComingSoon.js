import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer"

const ComingSoon = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-clip-padding mx-4 backdrop-filter h-full px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
      >
        <h1 className="text-3xl font-semibold mb-4 text-white text-center">Coming Soon!</h1>
        <img src="/images/comingsoon.jpg" alt="" className=" mb-4 h-[350px]"  />
        <p className="text-gray-100 text-center">
        We are working hard to bring you an amazing product. Stay tuned !
        </p>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default ComingSoon;
