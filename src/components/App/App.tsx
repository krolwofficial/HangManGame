import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import KeyboardEventHandler from 'react-keyboard-event-handler';
import device from '../../utils/device';
import { Store } from '../../store';
import Word from '../Word';
import CheckedLetters from '../CheckedLetters';
import FinalModal from '../FinalModal';
import LoadingModal from '../LoadingModal';
import HangMan from '../HangMan/HangMan';
import getWord from '../../utils/getWord';
import showLetter from '../../utils/showLetter';
import Keyboard from '../Keyboard';
// @ts-ignore

const keyboardLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'w',
  'v',
  'q',
  'x',
  'y',
  'z',
];

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    getWord(dispatch);
  }, []);

  const handleKeyPress = ({ key, keyCode }: KeyboardEvent) => {
    if (keyCode >= 65 && keyCode <= 90 && state.end === false) {
      const letter = key.toUpperCase();

      showLetter(
        letter,
        state.word,
        dispatch,
        state.user,
        state.mistakes,
        state.checkedLetters
      );
    }
  };

  let content;

  if (state.word && state.word !== null) {
    content = (
      <>
        <HangMan />
        <CheckedLetters />
        <Word />
        <KeyboardEventHandler
          handleKeys={keyboardLetters}
          onKeyEvent={(key: string, e: KeyboardEvent) => handleKeyPress(e)}
        />
        <Keyboard
          keyboardLetters={keyboardLetters}
          handleKeyPress={(e: any) => handleKeyPress(e)}
        />
        <FinalModal />
        <LoadingModal />
      </>
    );
  } else {
    content = <LoadingModal />;
  }

  return (
    <Wrapper>
      <Main>{content}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.tabletL} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-bottom: calc(100vw + 2px) solid #aff0cd;
    border-left: calc(100vw + 2px) solid transparent;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    @media ${device.laptop}, ${device.tabletL} {
      width: 100%;
      height: 100%;
      border: none;
      background: #fafafa;
    }
  }
`;

const Main = styled.main.attrs({
  'data-test': 'MainComponent',
})`
  background-color: #fff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  margin: 10px;
  border-radius: 2%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @media ${device.tabletP} {
    width: 360px;
    height: 640px;
    margin-top: calc(50vh - 320px);
    margin-left: calc(50% - 180px);
  }

  @media ${device.tabletL} {
    max-height: 400px;
  }

  @media ${device.laptop}, ${device.tabletL} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.laptop} {
    max-height: none;
    height: 450px;
    width: 760px;
    margin-left: 0;
    margin-top: 0;
  }

  @media ${device.laptopL} {
    height: 550px;
    width: 1000px;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-bottom: calc(100vw - 20px) solid #7cebaf;
    border-left: calc(100vw - 20px) solid transparent;
    position: absolute;
    right: 0;
    bottom: 0;
    @media ${device.mobileM} {
      border-bottom: calc(40vw + 2px) solid #7cebaf;
      border-left: calc(40vw + 2px) solid transparent;
    }

    @media ${device.laptop}, ${device.tabletL} {
      border-bottom: calc(20vw + 2px) solid #7cebaf;
      border-left: calc(20vw + 2px) solid transparent;
    }
  }
`;

export default App;
