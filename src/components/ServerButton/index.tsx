import React from 'react';

import Logo from '../../assets/Logo.svg';
import { Button } from './styles';

export interface ButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ButtonProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {
        isHome && <img src={Logo} alt="Logo Gabriel Bryan" />
      }
    </Button>
  );
}

export default ServerButton;