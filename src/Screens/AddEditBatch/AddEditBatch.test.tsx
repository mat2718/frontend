import React from 'react';
import { TouchableOpacity } from 'react-native';
import { mount, shallow } from 'enzyme';
import Header from '../../components/batches/Header';
import AddEditBatch from '.';

let wrapper: any;
const mockBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        goBack: mockBack,
        navigate: mockNavigate,
      };
    },
  };
});

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <AddEditBatch
        route={{
          params: {
            associates: 25,
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

  // /** tests the navigate button */
  // it('pressing the button navigates to new screen', () => {
  //   let wrap = shallow(
  //     <AddEditBatch
  //       route={{
  //         params: {
  //           associates: 25,
  //           batchId: 0,
  //           curriculum: 'Cloud Native',
  //           trainer: 'Robert Connell',
  //           startDate: 1622505600000,
  //           endDate: 1627776000000,
  //         },
  //       }}
  //     />
  //   );
  //   let button = wrap.find({ testID: 'goBackButton' }).last();
  //   button.invoke('onPress')();
  //   expect(mockBack).
  //   });
});

// yeet
