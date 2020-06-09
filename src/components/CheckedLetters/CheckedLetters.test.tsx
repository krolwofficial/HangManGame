import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import CheckedLetters from './CheckedLetters';

describe('CheckedLetters', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <StoreProvider initialValue={{ checkedLetters: ['t', 'e', 's', 't'] }}>
        <CheckedLetters />
      </StoreProvider>
    );
  });

  test('should render without error', () => {
    const component = findTestByAttr(wrapper, 'CheckedLettersComponent');
    expect(component.length).toBe(1);
  });

  test('should render 4 List components', () => {
    const component = findTestByAttr(wrapper, 'LetterComponent');
    expect(component.length).toBe(4);
  });
});
