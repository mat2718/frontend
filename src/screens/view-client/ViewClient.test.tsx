import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Header from '../../components/batches/header';
import ViewClient from '.';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
        goBack: mockGoBack,
      });
    },
  });
});

let wrapper: any;

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <ViewClient
        route={{
          params: {
            client: 'Revature',
          },
        }}
      />
    );
  });

  //tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the header is defined
  it('should display the header', () => {
    const shouldBeHeader = wrapper.find(Header);
    expect(shouldBeHeader).toBeDefined();
  });

  /** tests the edit batch button */
  it('should be pressed', () => {
    const shouldBePressed = wrapper
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      )
      .last()

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet
