import React from "react";
import { motion } from "framer-motion";
import { Wrapper, SectionTitle, Paragraph } from "./element";

const About = () => {
  return (
    <Wrapper
      as={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionTitle>About Me</SectionTitle>
      <Paragraph>
        I’m Nikolas — a frontend developer and part-time kombucha crafter 🍋. I
        build UI systems with precision and flavor, often while sipping
        something fermented.
      </Paragraph>
      <Paragraph>
        From Jakarta city maps to real-time human-AI chatrooms, I love projects
        that blend function and flow. Tools I use: React, Maplibre,
        Styled-Components, and sometimes just vibes.
      </Paragraph>
    </Wrapper>
  );
};

export default About;
