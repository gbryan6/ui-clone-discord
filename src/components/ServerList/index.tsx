import React from 'react';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome />

          <Separator />

          <ServerButton hasNotifications mentions={22}/>
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton />
      </Container>
  );
}

export default ServerList;