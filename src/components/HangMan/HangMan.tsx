import React from 'react';
import styled from 'styled-components';
import device from '../../utils/device';
import { Store } from '../../store';
import { ShowPropT } from '../../types/components';

const HangMan: React.FC = () => {
  const { state } = React.useContext(Store);

  return (
    <Wrapper>
      <HangManImage>
        <Bar show={state.mistakes && state.mistakes[0]} />
        <Head show={state.mistakes && state.mistakes[1]}>
          <Face>
            <Hair />
            <Mark>
              <MarkTop />
              <MarkBottom />
            </Mark>
            <EyeLeft />
            <EyeRight />
            <Beard />
            <Mouth />
          </Face>
          <Ears />
        </Head>
        <Neck show={state.mistakes && state.mistakes[2]} />
        <Corpus show={state.mistakes && state.mistakes[3]} />
        <LeftArm show={state.mistakes && state.mistakes[4]} />
        <LeftHand show={state.mistakes && state.mistakes[5]} />
        <RightArm show={state.mistakes && state.mistakes[6]} />
        <RightHand show={state.mistakes && state.mistakes[7]} />
        <LeftLeg show={state.mistakes && state.mistakes[8]} />
        <RightLeg show={state.mistakes && state.mistakes[9]} />
        <LeftFoot show={state.mistakes && state.mistakes[10]} />
        <RightFoot show={state.mistakes && state.mistakes[11]} />
      </HangManImage>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  'data-test': 'HangManComponent',
})`
  width: 300px;
  height: 220px;
  z-index: 2;
  @media ${device.mobileM} {
    height: 260px;
  }
  @media ${device.mobileL} {
    height: 280px;
  }

  @media ${device.tabletL} {
    width: 230px;
    height: 220px;
  }

  @media ${device.laptop} {
    width: 300px;
    height: 320px;
  }
`;
const HangManImage = styled.div`
  position: relative;
  width: calc(50% - 180px);
  transform: scale(0.35);
  @media ${device.mobileM} {
    transform: scale(0.4);
  }
  @media ${device.mobileL} {
    transform: scale(0.45);
  }

  @media ${device.tabletL} {
    transform: scale(0.35);
  }

  @media ${device.laptop} {
    transform: scale(0.5);
    margin-left: -50px;
  }
`;
const Bar = styled.span.attrs({
  'data-test': 'BarComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 400px;
  height: 30px;
  background: #555;
  border-radius: 0 10px 10px 0;
  position: relative;
  transition: opacity 0.5s ease-in-out;

  &:after {
    content: '';
    width: 30px;
    height: 90px;
    background: #555;
    position: absolute;
    right: 30px;
    border-radius: 0 0 10px 10px;
  }
`;
const Head = styled.span.attrs({
  'data-test': 'HeadComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  display: block;
  position: absolute;
  left: 100px;
  left: 280px;
  top: 60px;
`;
const Face = styled.span`
  display: block;
  width: 150px;
  height: 220px;
  background: #ffcc88;
  border-radius: 110px;
  position: absolute;
  overflow: hidden;
  z-index: 2;
`;
const Hair = styled.span`
  display: block;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #e0bd8b;
  position: absolute;
  top: -150px;
  left: -270px;

  &:after {
    content: '';
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #e0bd8b;
    position: absolute;
    right: calc(-100% - 90px);
  }
`;
const Mark = styled.span`
  display: block;
  position: absolute;
  top: 40px;
  left: 20%;
`;
const MarkTop = styled.span`
  display: block;
  position: relative;
  width: 15px;
  height: 15px;
  box-sizing: content-box;
  transform: rotate(-30deg);

  &:before {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid #f0b96c;
    border-radius: 50%;
  }

  &:after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    left: 70%;
    top: -5%;
    background: #ffcc88;
    width: 150%;
    height: 200%;
    z-index: 100;
  }
`;
const MarkBottom = styled.span`
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  box-sizing: content-box;
  transform: rotate(-45deg);
  left: 11px;
  top: 16px;

  &:before {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid #f0b96c;
    border-radius: 50%;
  }

  &:after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    left: 70%;
    top: -10%;
    background: #ffcc88;
    width: 150%;
    height: 200%;
    z-index: 100;
  }
`;
const EyeLeft = styled.span`
  display: block;
  position: absolute;
  background: #ffcc88;
  left: 20px;
  top: 85px;
  width: 30px;
  height: 60px;
  transform: rotate(75deg);
  z-index: 2;
  border-bottom-right-radius: 15px;

  &:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #444;
    position: absolute;
    top: 15px;
    left: -5px;
  }

  &:after {
    content: '';
    width: 25px;
    height: 5px;
    background: #777;
    position: absolute;
    top: 16px;
    left: -18px;
    border-radius: 2px;
    transform: rotate(-55deg);
  }
`;
const EyeRight = styled.span`
  display: block;
  position: absolute;
  background: #ffcc88;
  right: 20px;
  top: 85px;
  width: 30px;
  height: 60px;
  transform: rotate(-75deg);
  z-index: 2;
  border-bottom-left-radius: 15px;

  &:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #444;
    position: absolute;
    top: 15px;
    right: -5px;
  }
  &:after {
    content: '';
    width: 25px;
    height: 5px;
    background: #777;
    position: absolute;
    top: 16px;
    left: 23px;
    border-radius: 2px;
    transform: rotate(55deg);
  }
`;
const Beard = styled.span`
display: block;
  width: 150px;
    height: 100px;
    background: #e0bd8b;
    position: absolute;
    top: 120px;
    
    &:after {
      content: "";
      background: #aaa;
      width: 8px;
      height: 8px;
      position: absolute;
          left: 30%;
    border-radius: 50%;
    top: 35px;
`;
const Mouth = styled.span`
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  top: 140px;
  left: calc(50% - 20px);
  border: 2px solid #f0b96c;

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    background: #ffcc88;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  &:after {
    content: '';
    border-top: 2px solid #f0b96c;
    background: #e0bd8b;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
  }
`;
const Ears = styled.span`
  display: block;
  position: absolute;
  width: 190px;
  height: 35px;
  background: #f0b96c;
  top: 85px;
  left: -20px;
  border: 10px solid #ffcc88;
  box-sizing: border-box;
  border-radius: 20px;

  &:after {
    content: '';
    background: #aaa;
    width: 8px;
    height: 8px;
    position: absolute;
    right: -2px;
    border-radius: 50%;
    top: 20px;
  }
`;
const Neck = styled.span.attrs({
  'data-test': 'NeckComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  display: block;
  width: 50px;
  height: 70px;
  border-radius: 10px;
  background: #ffcc88;
  position: absolute;
  left: 330px;
  top: 240px;
`;
const Corpus = styled.span.attrs({
  'data-test': 'CorpusComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  display: block;
  width: 100px;
  height: 160px;
  border-radius: 10px;
  background: #4a9d6a;
  position: absolute;
  left: 305px;
  top: 300px;
  overflow: hidden;

  &:before {
    content: '';
    width: 50px;
    height: 150px;
    background: #88c356;
    position: absolute;
    left: 50px;
  }

  &:after {
    content: '';
    width: 110px;
    height: 50px;
    background: #3b5c92;
    position: absolute;
    top: 110px;
  }
`;
const LeftArm = styled.span.attrs({
  'data-test': 'LeftArmComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 40px;
  height: 130px;
  border-radius: 5px;
  background: #4a9d6a;
  position: absolute;
  top: 294px;
  left: 260px;
  transform: rotate(45deg);
  z-index: 2;
`;
const LeftHand = styled.span.attrs({
  'data-test': 'LeftHandComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffcc88;
  position: absolute;
  top: 390px;
  left: 218px;
`;
const RightArm = styled.span.attrs({
  'data-test': 'RightArmComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 40px;
  height: 130px;
  border-radius: 5px;
  background: #88c356;
  position: absolute;
  top: 294px;
  left: 410px;
  transform: rotate(-45deg);
  z-index: 2;
`;
const RightHand = styled.span.attrs({
  'data-test': 'RightHandComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffcc88;
  position: absolute;
  top: 390px;
  left: 462px;
`;
const LeftLeg = styled.span.attrs({
  'data-test': 'LeftLegComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 50px;
  height: 170px;
  border-radius: 5px;
  background: #3b5c92;
  position: absolute;
  top: 420px;
  left: 285px;
  transform: rotate(15deg);
  z-index: 2;
`;
const RightLeg = styled.span.attrs({
  'data-test': 'RightLegComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 50px;
  height: 170px;
  border-radius: 5px;
  background: #3b5c92;
  position: absolute;
  top: 420px;
  left: 375px;
  transform: rotate(-15deg);
  z-index: 2;
`;
const LeftFoot = styled.span.attrs({
  'data-test': 'LeftFootComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 80px;
  height: 25px;
  border-radius: 10px;
  background: #ffcc88;
  position: absolute;
  top: 570px;
  left: 225px;
  transform: rotate(10deg);
`;
const RightFoot = styled.span.attrs({
  'data-test': 'RightFootComponent',
})<ShowPropT>`
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;

  display: block;
  width: 80px;
  height: 25px;
  border-radius: 10px;
  background: #ffcc88;
  position: absolute;
  top: 570px;
  left: 405px;
  transform: rotate(-10deg);
`;

export default HangMan;
