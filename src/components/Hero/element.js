import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, #1f1c2c, #928dab);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  max-width: 600px;
`;

export const CTA = styled.a`
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background: white;
  color: black;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s;

  &:hover {
    background: #333;
    color: white;
  }
`;
