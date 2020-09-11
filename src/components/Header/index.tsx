import React from 'react';

import { Container } from './styles';
import pineappleIcon from '../../assets/pineapple-fruit.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => (
  <Container>
    <img src={pineappleIcon} alt="Pineapple" />
    {title}
  </Container>
);

export default Header;
