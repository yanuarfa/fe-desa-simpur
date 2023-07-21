"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";

export default function NextProvider({ children }) {
  return (
    <AnimatePresence mode="wait">
      <NextUIProvider>{children}</NextUIProvider>
    </AnimatePresence>
  );
}
