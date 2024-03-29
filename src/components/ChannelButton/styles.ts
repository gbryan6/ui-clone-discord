import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  padding: 6px 8px;

  margin-bottom: 2px;
  
  border-radius: 5px;

  transition: background-color .2s;

  > div {
      display: flex;
      align-items: center;

  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
    font-size: 15px;
  }

  &:hover, &.active{
    background-color: var(--quinary);
    > div span {
        color: var(--white);
    }
  }

`;


export const HashtagIcon = styled(Hashtag)`
 width: 20px;
 height: 20px;

 color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: white;
    }

`

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: white;
    }

    margin-left: 4px;
`
