import React from 'react';
import styled from 'styled-components';
import CustomButton from './components/CustomButton';
import {Tile} from 'react-native-elements';
// import myImage from './assets/justBook.jpg';


export default class App extends React.Component {
  render() {
    return (
      <Container>        
        <Tile
          imageSrc={require("./assets/justBook.jpg")}
          featured
        />
          {/* <HeaderImage></HeaderImage> */}
          {/* <Title> justBook </Title> */}
          <CustomButton
          text="Add Booking"
          textColor="#01d1e5"
          backgroundColor="lavenderblush"
          // borderColor="black"
          />
          <CustomButton
          text="Add Customer"
          textColor="#01d1e5"
          backgroundColor="lavenderblush"
          />
      </Container>
    )
  }
}

const Container = styled.View`
flex: 1;
background-color: papayawhip;
justify-content: flex-start;
align-items: center;
`;

const Title = styled.Text`
font-size: 24px;
font-weight: 500;
color: palevioletred;
`;

// const HeaderImage = styled.div`
// background-image: url(${myImage});
// `;