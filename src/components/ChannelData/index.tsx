import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, InputIcon, Input } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])

  return (
    <Container>
      <Messages>
      <ChannelMessage 
        author="Gabriel Bryan"
        date="19/08/2021"
        content="Olá mundo da programação"
      />

      <ChannelMessage 
        author="Luana Emanuela"
        date="19/08/2021"
        content={
          <>
          <Mention>@Gabriel Bryan</Mention>, Olá marinheiro
          </>
        }
        hasMention
        isBot
      />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;