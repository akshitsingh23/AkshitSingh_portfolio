import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          // "Developer",
          "Web Developer",
          "DevOps",
          // "Open Source Contributor",
          "AI-ML Enthusiast",
          "Competitve Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type