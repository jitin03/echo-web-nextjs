import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DropdownArrow({ id = "" }) {
  return (
    <div className="dropdown-arrow-container rounded-full border border-white px-2 py-2 z-50">
      <motion.a
        href={`#${id}`}
        transition={{
          delay: 0.4,
        }}
      >
        <FaArrowDown />
      </motion.a>
    </div>
  );
}
