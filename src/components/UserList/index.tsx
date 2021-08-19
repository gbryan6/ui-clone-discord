import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot": ""} />

      <strong>{nickname}</strong>

      {isBot && <span>BOT</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Gabriel Bryan" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Luana Emanuela" isBot />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      <UserRow nickname="Anônimo" />
      
    </Container>
  );
};

export default UserList;
