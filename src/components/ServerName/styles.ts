import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);

  box-shadow: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);

  border-radius: 7px 0 0 0;
  z-index: 2;
`;

export const Title = styled.h1`

    font-size: 15px;
    font-weight: 500;
    color: var(--white);
`
export const ExpandIcon = styled(ExpandMore)`
    width: 24px;
    height: 24px;

    color: var(--white);
    cursor: pointer;
`