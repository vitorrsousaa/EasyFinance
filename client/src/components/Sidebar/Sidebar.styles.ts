import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.black[900]};

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  color: #fff;

  width: 18rem;
  height: 100vh;

  header {
    padding: 0 1rem 1rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.black[700]};
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1rem 0;
  }

  small {
    display: block;
    font-size: 1rem;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    width: 4.5rem;
    padding: 0.75rem 0;
  }
`;
