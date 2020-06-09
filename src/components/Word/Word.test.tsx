import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import Word from './Word';

describe('Word', () => {
  test('should render without error', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{}}>
        <Word />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'WordComponent');
    expect(component.length).toBe(1);
  });

  test('should render 4 child components', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ user: ['t', 'e', 's', 't'] }}>
        <Word />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'LetterInWordComponent');
    expect(component.length).toBe(4);
  });
});
