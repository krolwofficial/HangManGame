import React from 'react';
import styled from 'styled-components';
import device from '../../utils/device';
import { ShowPropT, LetterI } from '../../types/components';

const LetterInWord = ({ letter: { letter, show } }: LetterI) => {
  return (
    <LetterWrapper data-test="LetterInWordComponent" show={show}>
      <Letter data-test="LetterComponent" show={show}>
        {letter}
      </Letter>
    </LetterWrapper>
  );
};

const LetterWrapper = styled.li.attrs({
  'data-test': 'LetterWrapperComponent',
})<ShowPropT>`
  background: ${({ show }) => (show ? '#00d664' : 'transparent')};
  display: inline-block;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 5px;
  width: 30px;
  height: 30px;
  color: white;
  border-bottom: 1px solid #222;

  @media ${device.mobileM} {
    width: 35px;
    height: 35px;
  }
  @media ${device.tablet} {
    border-radius: 5px;
    width: 40px;
    height: 40px;
  }
  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
`;
const Letter = styled.p<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  font-size: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default LetterInWord;
