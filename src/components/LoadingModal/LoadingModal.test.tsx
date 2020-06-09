import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import LoadingModal from './LoadingModal';

describe('LoadingModal', () => {
  test('should render without error', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{}}>
        <LoadingModal />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'LoadingModalComponent');
    expect(component.length).toBe(1);
  });
  test('should display LoadingModalComponent while receive loading true context', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ loading: true }}>
        <LoadingModal />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'LoadingModalComponent');
    expect(component).toHaveStyleRule('display', 'flex');
  });
});
