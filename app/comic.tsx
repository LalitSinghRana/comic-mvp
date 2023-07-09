"use client"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import Image from 'next/image'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import OPM_1 from "@/assets/OPM/OPM_1.png"
import OPM_2 from "@/assets/OPM/OPM_2.png"
import OPM_3 from "@/assets/OPM/OPM_3.png"

export default function ComicPage() {
  return (
    <motion.div
      className="flex h-full w-full place-content-center"
      animate={{
        scale: [0, 1, 1, 1, 1],
        // rotate: [0, 0, 180, 180, 0],
        // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1
      // }}
    >
      <Image
        className="flex h-full"
        src={OPM_3}
        // width={screen.availWidth}
        // height={globalThis.window?.screen.availHeight}
        alt="Picture of the author"
        // onClick={handle.enter}
      />
    </motion.div>
  )
}
