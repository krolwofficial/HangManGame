import React from 'react';
import { mount } from 'enzyme';

import findTestByAttr from '../../utils/findTestByAttr';
import StoreProvider from '../../store';
import HangMan from './HangMan';

describe('HangMan', () => {
  test('should render without error', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: [] }}>
        <HangMan />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'HangManComponent');
    expect(component.length).toBe(1);
  });
  test('should display BarComponent while receive 1 mistake', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: [true] }}>
        <HangMan />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'BarComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should NOT display BarComponent while not receive any mistake', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: [] }}>
        <HangMan />
      </StoreProvider>
    );
    const component = findTestByAttr(wrapper, 'BarComponent');
    expect(component).toHaveStyleRule('opacity', '0');
  });
  test('should display HeadComponent while receive 2 mistakes', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: [true, true] }}>
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'HeadComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display NeckComponent while receive 3 mistakes', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: ['t', 'e', 's'] }}>
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'NeckComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display CorpusComponent while receive 4 mistakes', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: ['t', 'e', 's', 't'] }}>
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'CorpusComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display LeftArmComponent while receive 5 mistakes', () => {
    const wrapper = mount(
      <StoreProvider initialValue={{ mistakes: ['t', 'e', 's', 't', 't'] }}>
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'LeftArmComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display LeftHandComponent while receive 6 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{ mistakes: ['t', 'e', 's', 't', 't', 'e'] }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'LeftHandComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display RightArmComponent while receive 7 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{ mistakes: ['t', 'e', 's', 't', 't', 'e', 's'] }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'RightArmComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display RightHandComponent while receive 8 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{ mistakes: ['t', 'e', 's', 't', 't', 'e', 's', 't'] }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'RightHandComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display LeftLegComponent while receive 9 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{
          mistakes: ['t', 'e', 's', 't', 't', 'e', 's', 't', 't'],
        }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'LeftLegComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display RightLegComponent while receive 10 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{
          mistakes: ['t', 'e', 's', 't', 't', 'e', 's', 't', 't', 'e'],
        }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'RightLegComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display LeftFootComponent while receive 11 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{
          mistakes: ['t', 'e', 's', 't', 't', 'e', 's', 't', 't', 'e', 's'],
        }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'LeftFootComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
  test('should display RightFootComponent while receive 12 mistakes', () => {
    const wrapper = mount(
      <StoreProvider
        initialValue={{
          mistakes: [
            't',
            'e',
            's',
            't',
            't',
            'e',
            's',
            't',
            't',
            'e',
            's',
            't',
          ],
        }}
      >
        <HangMan />
      </StoreProvider>
    );

    const component = findTestByAttr(wrapper, 'RightFootComponent');
    expect(component).toHaveStyleRule('opacity', '1');
  });
});
