import React from 'react';
import { mount } from 'enzyme';
import ClientsListItem from '.';
import { TouchableOpacity } from 'react-native';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

/**
 * Clients List Item Test - test file for the ClientsListItem component
 * @author Matthew Otto and Oriel Red Oral
 */

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    __esModule: true,
    useNavigation: () => {
      return {
        navigate: mockNavigate,
      };
    },
  };
});

const demandsState = [
  {
    demandid: 7,
    clientid: 1,
    curriculumid: 2,
    needby: '2021-08-20T00:00:00.000Z',
    quantitydemanded: 19,
  },
];

/** mockStore */
let mockStore = configureStore([thunk])({
  demands: demandsState,
});

let wrapper: any;

describe('tests ClientsListItem', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <ClientsListItem clientname='Revature' clientid={1} />
      </Provider>
    );
  });

  // tests if the component is there
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  // tests if the barchart is defined
  it('should be pressable', () => {
    const shouldBePressed = wrapper.find(TouchableOpacity).at(0);
    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });
});
