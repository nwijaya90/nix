import React from "react";
import { motion } from "framer-motion";
import {
  Wrapper,
  SectionTitle,
  ProjectItem,
  Description,
  ProjectLink,
  ProjectContent,
  ProjectImage,
} from "./element";

const Projects = () => (
  <Wrapper
    as={motion.section}
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <SectionTitle>Projects</SectionTitle>

    <ProjectItem reverse={false}>
      <ProjectContent>
        <h3>🗺️ Urban Amenities Explorer</h3>
        <Description>
          A tool to simulate public service access across cities using custom
          map layers and data filters. Built with Maplibre, React, and a passion
          for civic tech.
        </Description>
        <ProjectLink href="#">[Private Project]</ProjectLink>
      </ProjectContent>

      <ProjectImage src="/images/ss-1.png" alt="Urban Amenities Explorer" />
    </ProjectItem>

    <ProjectItem reverse={true}>
      <ProjectContent>
        <h3>💬 Hybrid AI-Human Chat</h3>
        <Description>
          Real-time chat system using Socket.IO + Langflow to blend AI and human
          conversations. Includes admin viewer and user UI.
        </Description>
        <ProjectLink href="#">View Project</ProjectLink>
      </ProjectContent>

      <ProjectImage src="/images/ss-2.png" alt="Hybrid Chat" />
    </ProjectItem>
  </Wrapper>
);

export default Projects;
