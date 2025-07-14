import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const Email = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

export const Socials = styled.div`
  margin-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    margin: 0 0.5rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
