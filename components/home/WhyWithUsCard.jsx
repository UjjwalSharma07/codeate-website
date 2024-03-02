import { motion } from "framer-motion";
import React from "react";

const WhyWithUsCard = ({ title, content }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
    >
      <div className="text-2xl font-semibold mt-5 mb-10 text-pink-500">
        {title}
      </div>
      <div className="mb-5 text-center">{content}</div>
    </motion.div>
  );
};

export default WhyWithUsCard;
