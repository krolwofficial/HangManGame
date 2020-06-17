import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import Keyboard from './Keyboard';

describe('Keyboard', () => {
  test('should render without error', () => {
    const wrapper = mount(<Keyboard />);
    const component = findTestByAttr(wrapper, 'KeyboardComponent');
    expect(component.length).toBe(1);
  });

  test('should render 4 child components', () => {
    const wrapper = mount(<Keyboard keyboardLetters={['t', 'e', 's', 't']} />);
    const component = findTestByAttr(wrapper, 'LetterWrapperComponent');
    expect(component.length).toBe(4);
  });

  test('should call handleKeyPress function', () => {
    const handleKeyPress = jest.fn();
    const wrapper = mount(
      <Keyboard keyboardLetters={['t']} handleKeyPress={handleKeyPress} />
    );
    const component = findTestByAttr(wrapper, 'LetterWrapperComponent');

    component.simulate('click');

    expect(handleKeyPress).toHaveBeenCalledTimes(1);
  });

  test('should call handleKeyPress function with proper value', () => {
    const handleKeyPress = jest.fn();
    const wrapper = mount(
      <Keyboard keyboardLetters={['t']} handleKeyPress={handleKeyPress} />
    );
    const component = findTestByAttr(wrapper, 'LetterWrapperComponent');

    component.simulate('click');

    expect(handleKeyPress).toHaveBeenCalledWith({ key: 't', keyCode: 84 });
  });
});
