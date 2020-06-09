import React from 'react';
import styled from 'styled-components';
import { Store } from '../../store';
import { LoadingPropT } from '../../types/components';

const LoadingModal = () => {
  const { state } = React.useContext(Store);

  return (
    <Wrapper loading={state.loading ? state.loading.toString() : undefined}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section.attrs({
  'data-test': 'LoadingModalComponent',
})<LoadingPropT>`
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 102;
  background: #ffffff;
  justify-content: center;
  align-items: center;
`;

export default LoadingModal;
