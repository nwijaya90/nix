import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  overflow-x: hidden;
`;

export const Section = styled.section`
  margin-bottom: 4rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: #0070f3;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
`;

export const Project = styled.div`
  margin-bottom: 2rem;

  a {
    color: #0070f3;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Socials = styled.div`
  margin-top: 1rem;

  a {
    margin: 0 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: #888;
  font-size: 0.9rem;
`;

export const Toggle = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 0.4rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: bold;
`;
