import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);

  box-shadow: rgba(0,0,0, 0.02) 0px 1px 0px 0px;

  border-radius: 7px 0 0 0;
  z-index: 2;
`;

export const Title = styled.h1`

    font-size: 15px;
    font-weight: 500;
    color: var(--white);
`
export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;

    color: var(--white);
    cursor: pointer;
`