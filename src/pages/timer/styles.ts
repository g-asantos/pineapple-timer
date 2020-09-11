import styled from 'styled-components';

const Container = styled.div`
  height: 80vh;
  div {
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 100px;
    padding-top: 10vh;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 56px;
  width: 100px;
  margin-right: 25px;
  border-radius: 25%;
  background-color: ${props => props.theme};
  color: white;
`;
const PomodoroContainer = styled.div``;

const PomodoroButton = styled.button`
  height: 30px;
  width: 250px;
  background-color: ${props => props.color};
  border: 1px solid grey;
  color: #006600;
  font-weight: bold;
`;

export {
  Container,
  Button,
  ButtonContainer,
  PomodoroButton,
  PomodoroContainer,
};
