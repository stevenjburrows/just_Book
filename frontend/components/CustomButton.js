import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';

const CustomButton = (props) => (
    <ButtonContainer 
    onPress={() => alert("Booking added")}
    backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
`;
const ButtonText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.textColor};
  text-align: center;
`;