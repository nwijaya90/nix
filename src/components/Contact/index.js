import React from "react";
import { motion } from "framer-motion";
import { Wrapper, SectionTitle, Paragraph, Email, Socials } from "./element";

const Contact = () => (
  <Wrapper
    as={motion.section}
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <SectionTitle>Get In Touch</SectionTitle>
    <Paragraph>Want to work together or just say hi?</Paragraph>
    <Email href="mailto:nikolas@example.com">📧 huangnik90@gmail.com</Email>

    <Socials>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a
        href="https://www.linkedin.com/in/nikolas-wijaya-17965b180/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </Socials>
  </Wrapper>
);

export default Contact;
