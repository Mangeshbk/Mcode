"use client";
import React from "react";
import "./index.scss";
import { motion } from "framer-motion";

export default function Heroview() {
  return (
    <motion.main className="hero-container">
      <div className="animation-container">
        <motion.h1
          animate={{ y: -20, color: "#ffffff" }}
          initial={{ y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 2,
            type: "spring",
          }}
          className="heading01"
        >
          Staking Redefined
        </motion.h1>
        <div className="animation-cube">
          <video
            muted
            autoPlay
            loop
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            src="video/logo.webm"
          ></video>
        </div>
      </div>
      <div className="frame-note">
        <div className="note paragraph01">
          Unlock the true power of liquid staking and Defi.
        </div>
        <div className="eth-frame">
          <div>
            <h4 className="heading04">
              Introducing Liquid Staking for Ethereum
            </h4>
            <button>Learn More</button>
          </div>
          <div></div>
          <div>X</div>
        </div>
      </div>
      <div className="stats">
        <p className="paragraph01">
          <span className="stats-name">TVL</span>
          <span>3,428,795 MATIC</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Mothly Active Users</span>
          <span>4,176</span>
        </p>
        <p className="paragraph01">
          <span className="stats-name">Mainnet Stakers</span>
          <span>11,449</span>
        </p>
      </div>
    </motion.main>
  );
}
