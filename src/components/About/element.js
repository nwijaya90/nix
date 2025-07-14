import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 1.5rem auto;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
`;
