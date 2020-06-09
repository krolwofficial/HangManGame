import React from 'react';
import styled from 'styled-components';
import { Store } from '../../store';
import device from '../../utils/device';

const CheckedLetters = () => {
  const { state } = React.useContext(Store);

  return (
    <Wrapper>
      <Title>YOU MISSED:</Title>
      <List>
        {state.checkedLetters &&
          state.checkedLetters.map((item: string, index: number) => {
            return <Letter key={index}>{item}</Letter>;
          })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section.attrs({
  'data-test': 'CheckedLettersComponent',
})`
  z-index: 2;
  color: #333;

  @media ${device.tabletL} {
    width: calc(100% - 230px);
    margin-top: 10%;
  }

  @media ${device.laptop} {
    width: calc(100% - 300px);
    margin-top: 10%;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 15px;
  padding-bottom: 10px;
  text-align: center;
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Letter = styled.li.attrs({
  'data-test': 'LetterComponent',
})`
  font-weight: 700;
  list-style: none;
  font-size: 25px;
  padding: 0 5px;
  @media ${device.mobileM} {
    font-size: 35px;
  }
  @media ${device.laptop} {
    font-size: 55px;
  }
`;

export default CheckedLetters;
