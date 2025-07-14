import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Toggle } from "./elements";

import { Hero, About, Projects, Contact, Footer } from "./components";

const lightTheme = {
  background: "#f9f9f9",
  text: "#333",
};

const darkTheme = {
  background: "#121212",
  text: "#f0f0f0",
};

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Container
        style={{
          backgroundColor: dark ? "#121212" : "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
