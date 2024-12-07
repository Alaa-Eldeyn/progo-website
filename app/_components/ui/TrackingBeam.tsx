"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [150, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 hidden lg:block">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 8 24 V ${svgHeight * 0.8} l 0 24V ${svgHeight}`}
            fill="none"
            stroke="#21202A"
            strokeOpacity="100"
            strokeWidth="8"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 8 24 V ${svgHeight * 0.8} l 0 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#ea4054" stopOpacity="0"></stop>
              <stop stopColor="#ea4054"></stop>
              <stop offset="0.325" stopColor="#ea4054"></stop>
              <stop offset="1" stopColor="#ea4054" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
