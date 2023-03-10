import styled from 'styled-components';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .header-table {
    &.show-popover {
      padding-right: 3rem;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.black[200]};
    height: 3rem;

    strong {
      font-weight: 700;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.black[700]};
      min-width: 150px;
    }

    strong:nth-child(2) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1250px) {
    .header-table {
      strong {
        min-width: 120px;
      }
    }

    small {
      min-width: 120px;
    }
  }

  @media screen and (max-width: 1100px) {
    small {
      font-size: 10px;
    }

    div {
      small:nth-child(5) {
        min-width: 70px;
      }
    }

    .header-table {
      strong:nth-child(5) {
        min-width: 70px;
      }
    }
  }

  @media screen and (max-width: 970px) {
    div {
      gap: 0.5rem;
      padding: 0 0.5rem;
    }

    small {
      min-width: 90px;
    }

    .header-table {
      gap: 0.5rem;
      padding: 0 2.5rem 0 0.5rem;

      strong {
        min-width: 90px;
      }
    }

    div {
      small:nth-child(5) {
        display: none;
      }
    }

    .header-table {
      strong:nth-child(5) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 770px) {
    div {
      small:nth-child(4) {
        min-width: 64px;
      }
    }

    .header-table {
      strong:nth-child(4) {
        min-width: 64px;
      }
    }
  }

  @media screen and (max-width: 770px) {
    div {
      small:nth-child(1) {
        display: none;
      }
    }

    .header-table {
      strong:nth-child(1) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 450px) {
    small,
    strong {
      width: 100%;
    }

    div {
      small:nth-child(2) {
        display: none;
      }
    }

    .header-table {
      strong:nth-child(2) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 380px) {
    .header-table {
      padding: 0 0.5rem;
    }
  }
`;
