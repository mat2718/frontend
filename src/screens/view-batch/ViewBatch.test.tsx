import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';
import Header from '../../components/batches/header';
import ViewBatch from '.';

let wrapper: any;

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
jest.mock('@react-navigation/native' , () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
        goBack: mockGoBack,
      })
    },
  });
});

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <ViewBatch
        route={{
          params: {
            associate: 25,
            batchId: 0,
            curriculum: 'Cloud Native',
            trainer: 'Robert Connell',
            startDate: 1622505600000,
            endDate: 1627776000000,
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
      .last();
    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});

// yeet
