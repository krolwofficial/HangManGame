import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import FinalModal from './FinalModal';

describe('FinalModal', () => {
  describe('without proper context value', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = mount(
        <StoreProvider initialValue={{}}>
          <FinalModal />
        </StoreProvider>
      );
    });

    test('should render without error', () => {
      const component = findTestByAttr(wrapper, 'FinalModalComponent');
      expect(component.length).toBe(1);
    });

    test('should NOT display Wrapper component', () => {
      const component = findTestByAttr(wrapper, 'FinalModalComponent');
      expect(component).toHaveStyleRule('display', 'none');
    });
  });

  describe('with proper context value', () => {
    let wrapper: any;

    const initialValue = { end: 'WON', word: 'test' };
    beforeEach(() => {
      wrapper = mount(
        <StoreProvider initialValue={initialValue}>
          <FinalModal />
        </StoreProvider>
      );
    });

    test('should display Wrapper component', () => {
      const component = findTestByAttr(wrapper, 'FinalModalComponent');
      expect(component).toHaveStyleRule('display', 'block');
    });
    test('should render TitleComponent component with proper content', () => {
      const component = findTestByAttr(wrapper, 'TitleComponent');
      expect(component.text()).toMatch('YOU WON');
    });
    test('should render PasswordComponent component with proper content', () => {
      const component = findTestByAttr(wrapper, 'PasswordComponent');
      expect(component.text()).toMatch('test');
    });
    test.only('should call handleClick after click on button', () => {
      const component = findTestByAttr(wrapper, 'RestartButtonComponent');
      component.simulate('click');
      expect(component.text()).toMatch('PLAY AGAIN');
    });
  });
});
