import styled from 'styled-components/native';
import * as C from '../../assets/styles/color';

export const StyledView = styled.View`
  background-color: papayawhip;
  color: red;
`;

export const StyledText = styled.Text`
  color: palevioletred;
`;

export const Menu = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${C.primeiro};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  margin-left: 20px;
  font-size: 20px;
  color: white;
`;

export const BoxBurger = styled.View`
  margin-left: 5px;
`;

export const BackgroundHome = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: ${C.segundo};
`;
