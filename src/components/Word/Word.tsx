import React from 'react';
import styled from 'styled-components';
import device from '../../utils/device';
import { Store } from '../../store';
import LetterInWord from '../LetterInWord';
import { LetterT } from '../../types/components';

const Word = () => {
  const { state } = React.useContext(Store);

  return (
    <WordList>
      {state.user &&
        state.user.map((letter: LetterT, index: number) => {
          return <LetterInWord key={index} letter={letter} />;
        })}
    </WordList>
  );
};

const WordList = styled.ul.attrs({
  'data-test': 'WordComponent',
})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
  margin-bottom: 15px;
  @media ${device.laptop}, ${device.tabletL} {
    width: 100%;
  }
`;

export default Word;
