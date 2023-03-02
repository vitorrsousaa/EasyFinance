import styled from 'styled-components';

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  max-width: 18.75rem;

  @media (max-width: 450px) {
    width: 100%;

    img {
      width: 35vw;
    }
  }
`;