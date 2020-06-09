import React from 'react';
import { shallow } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import LetterInWord from './LetterInWord';

describe('LetterInWord', () => {
  test('should render LetterInWordComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: false }} />
    );

    const component = findTestByAttr(wrapper, 'LetterInWordComponent');
    expect(component.length).toBe(1);
  });

  test('should render LetterComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: false }} />
    );

    const component = findTestByAttr(wrapper, 'LetterComponent');
    expect(component.length).toBe(1);
  });

  test('should display LetterInWordComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: true }} />
    );

    const component = findTestByAttr(wrapper, 'LetterInWordComponent');
    expect(component).toHaveStyleRule('background', '#00d664');
  });

  test('should display LetterComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: true }} />
    );

    const component = findTestByAttr(wrapper, 'LetterComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });

  test('should NOT display LetterInWordComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: false }} />
    );

    const component = findTestByAttr(wrapper, 'LetterInWordComponent');
    expect(component).toHaveStyleRule('background', '#fafafa');
  });

  test('should NOT display LetterComponent without error', () => {
    const wrapper = shallow(
      <LetterInWord letter={{ letter: 't', show: false }} />
    );

    const component = findTestByAttr(wrapper, 'LetterComponent');
    expect(component).toHaveStyleRule('opacity', '0');
  });
});
