import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 2% 1%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  max-width: 700px;
  line-height: 1.7;
`;

export const ProjectLink = styled.a`
  font-weight: bold;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${({ reverse }) =>
    reverse &&
    `
    direction: rtl;

    & > * {
      direction: ltr;
    }
  `}

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
`;

export const ProjectContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 1024px) {
    padding: 2rem 1.5rem;
    text-align: start;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0;
`;
