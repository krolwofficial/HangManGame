import React from 'react';
import styled from 'styled-components';
import device from '../../utils/device';

const Keyboard = ({keyboardLetters, handleKeyPress}: any) => {

  const handleClick = (letter: any) => {
    const e = {
      key: letter,
      keyCode: letter.charCodeAt(0) - 32
    }
    handleKeyPress(e)
  }

  return (
    <Wrapper>
      {keyboardLetters.map((letter: any, index: number) => {
        return (
          <LetterWrapper key={index} onClick={() => handleClick(letter)}>
            <Letter >
              {letter}
            </Letter>
          </LetterWrapper>
        )
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul.attrs({
  'data-test': 'KeyboardComponent',
})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
  margin-bottom: 15px;
  @media ${device.laptop}, ${device.tabletL} {
    display: none;
  }
`;

const LetterWrapper = styled.li.attrs({
  'data-test': 'LetterWrapperComponent',
})`
  background: #fafafa;
  display: inline-block;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 2px;
  width: 30px;
  height: 30px;
  color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  
  @media ${device.mobileM} {
    width: 40px;
    height: 40px;
  }
  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
`;
const Letter = styled.p`
  opacity: 1;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: #222;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export default Keyboard;
