import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Header from '../../components/batches/header';
import ViewClient from '.';

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
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);

    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet
