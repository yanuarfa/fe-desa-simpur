"use client";
import React, { useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import loadingAnimation from "@/assets/lottie/loading.json";

export default function Loading() {
  const loadingRef = useRef(null);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="h-screen w-full"
    >
      <Lottie
        style={{ height: "100%" }}
        lottieRef={loadingRef}
        animationData={loadingAnimation}
        loop={false}
        onComplete={() => {
          loadingRef.current.setDirection(-1);
          loadingRef.current.play();
        }}
      />
    </motion.div>
  );
}
