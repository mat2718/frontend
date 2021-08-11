import { mount } from 'enzyme';
import { Text } from 'react-native';
import ClientScreen from '.';
import RNPickerSelect from 'react-native-picker-select';
import * as React from 'react';

import ClientList from '../../components/clients_old/ClientList';
import DemandList from '../../components/clients_old/DemandList';

let wrapper: any;
describe('testing client screen', () => {
  beforeEach(() => {
    wrapper = mount(<ClientScreen />);
  });

  it('should render without throwing errors', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display "button" for adding a client', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('add') &&
            node.text().toLowerCase().includes('client')
        )
    ).toBe(true);
  });

  it('"button" for adding client is pressable', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('add') &&
            node.text().toLowerCase().includes('client') &&
            node.props().hasOwnProperty('onPress')
        )
    ).toBe(true);
  });

  it('should display "button" for editing a client', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('edit') &&
            node.text().toLowerCase().includes('client')
        )
    ).toBe(true);
  });

  it('edit client "button" is pressable ', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('edit') &&
            node.text().toLowerCase().includes('client') &&
            node.props().hasOwnProperty('onPress')
        )
    ).toBe(true);
  });

  it('should display ClientList', () => {
    expect(wrapper.find(ClientList).length).toBeGreaterThan(0);
  });

  it('should display DemandList', () => {
    expect(wrapper.find(DemandList).length).toBeGreaterThan(0);
  });

  it('should display "button" for adding demand', () => {
    expect(
      wrapper.find(Text).someWhere(
        (node) =>
          node.text().toLowerCase().includes('create') && //brittle?
          node.text().toLowerCase().includes('demand')
      )
    ).toBe(true);
  });

  it('add demand "button" is pressable', () => {
    expect(
      wrapper.find(Text).someWhere(
        (node) =>
          node.text().toLowerCase().includes('create') && //brittle?
          node.text().toLowerCase().includes('demand') &&
          node.props().hasOwnProperty('onPress')
      )
    ).toBe(true);
  });

  it('should display "button" for editing demand', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('edit') &&
            node.text().toLowerCase().includes('demand')
        )
    ).toBe(true);
  });

  it('edit demand "button" is pressable', () => {
    expect(
      wrapper
        .find(Text)
        .someWhere(
          (node) =>
            node.text().toLowerCase().includes('edit') &&
            node.text().toLowerCase().includes('demand') &&
            node.props().hasOwnProperty('onPress')
        )
    ).toBe(true);
  });

  // integration test
  it('if we change currClient using Picker, DemandList has a new prop', () => {
    dropDownMenu = wrapper.find(RNPickerSelect);
    const arg = 'yeet';
    dropDownMenu.invoke('onValueChange')(arg);
    expect(Object.values(wrapper.find(DemandList).props())).toContain(arg);
  });
});
