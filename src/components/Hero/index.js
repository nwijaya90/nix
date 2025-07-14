import React from "react";
import { motion } from "framer-motion";
import { Wrapper, Title, Subtitle, CTA } from "./element";

const Hero = () => (
  <Wrapper
    as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <Title>Hey, I’m Nikolas</Title>
      <Subtitle>
        I craft immersive web experiences with React, Maplibre, and a pinch of
        kombucha.
      </Subtitle>
      <CTA href="#projects">Explore My Work</CTA>
    </motion.div>
  </Wrapper>
);

export default Hero;
