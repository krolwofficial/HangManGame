import React from 'react';
import styled from 'styled-components';
import { Store } from '../../store';
import device from '../../utils/device';
import getWord from '../../utils/getWord';
import { EndPropT } from '../../types/components';

const FinalModal = () => {
  const { state, dispatch } = React.useContext(Store);

  const handleClick = async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });

    dispatch({
      type: 'SET_END',
      payload: false,
    });

    await getWord(dispatch);

    dispatch({
      type: 'SET_LOADING',
      payload: false,
    });
  };

  const end = state.end ? state.end.toString() : undefined;

  return (
    <Wrapper end={end}>
      <Title>YOU {end}</Title>
      <SubTitle>The password was:</SubTitle>
      <Password>{state.word}</Password>
      <RestartButton onClick={() => handleClick()}>PLAY AGAIN</RestartButton>
    </Wrapper>
  );
};

const Wrapper = styled.section.attrs({
  'data-test': 'FinalModalComponent',
})<EndPropT>`
  display: ${({ end }) => (end ? 'flex' : 'none')};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 101;
  background: #fff;
  flex-direction: column;
    justify-content: center;
  @media ${device.tabletP}, ${device.tabletL} {
    display: ${({ end }) => (end ? 'block' : 'none')};
    font-size: 45px;
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
    z-index: -1;
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

const Title = styled.p.attrs({
  'data-test': 'TitleComponent',
})`
  font-size: 40px;
  text-align: center;
  margin-top: 10%;
  @media ${device.tabletP}, ${device.tabletL} {
    font-size: 45px;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  @media ${device.tabletP}, ${device.tabletL} {
    font-size: 30px;
  }
`;

const Password = styled.p.attrs({
  'data-test': 'PasswordComponent',
})`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 10px;
  @media ${device.tabletP}, ${device.tabletL} {
    font-size: 40px;
  }
`;

const RestartButton = styled.button.attrs({
  'data-test': 'RestartButtonComponent',
})`
  border: 2px solid #00d664;
  width: 250px;
  height: 50px;
  font-size: 20px;
  background: #fafafa;
  margin-left: calc(50% - 125px);
  margin-top: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    background: #00d664;
    color: white;
  }
`;

export default FinalModal;
