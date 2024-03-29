import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton'
const ChannelList: React.FC = () => {
  return (
    <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
        </Category>

        <ChannelButton  channelName="chat-livre" selected={true} />
        <ChannelButton  channelName="html" />
        <ChannelButton  channelName="css" />
        <ChannelButton  channelName="reactjs" />
        <ChannelButton  channelName="trabalho" />

    </Container>
  );
}

export default ChannelList;