import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Words() {
  return (
    <motion.div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-4">
      <motion.div className="flex flex-col space-y-4" layoutId="nav">
        <Link href="/stuff">
          <a className="text-2xl font-medium">/stuff</a>
        </Link>
        <Link href="/words">
          <a className="text-2xl font-medium">/words</a>
        </Link>
      </motion.div>
    </motion.div>
  );
}
