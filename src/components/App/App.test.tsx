import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import App from './App';
import CheckedLetters from '../CheckedLetters';

describe('App', () => {
  test('should render without error', () => {
    const wrapper = mount(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'MainComponent');
    expect(component.length).toBe(1);
  });
  // test('should render AppStartLoading component as first', () => {
  //   const wrapper = mount(
  //     <StoreProvider>
  //       <App />
  //     </StoreProvider>);
  //   const component = findTestByAttr(wrapper, 'AppStartLoading');
  //   expect(component.length).toBe(1);
  // });
  // describe( 'after word to guss is fetched', () => {
  //   let wrapper: any;
  //   // let dispatch = jest.fn();
  //
  //   beforeEach(() => {
  //     wrapper = mount(
  //       <StoreProvider initialValue={{word: 'test'}}>
  //         <App />
  //       </StoreProvider>
  //     );
  //   });
  //
  //   test('should render default components ', () => {
  //
  //     const HangManComponent = findTestByAttr(wrapper, 'HangManComponent');
  //     expect(HangManComponent.length).toBe(1);
  //     const CheckedLettersComponent = findTestByAttr(wrapper, 'CheckedLettersComponent');
  //     expect(CheckedLettersComponent.length).toBe(1);
  //     const WordComponent = findTestByAttr(wrapper, 'WordComponent');
  //     expect(WordComponent.length).toBe(1);
  //     const FinalModalComponent = findTestByAttr(wrapper, 'FinalModalComponent');
  //     expect(FinalModalComponent.length).toBe(1);
  //     const LoadingModalComponent = findTestByAttr(wrapper, 'LoadingModalComponent');
  //     expect(LoadingModalComponent.length).toBe(1);
  //   });
  // })
});
