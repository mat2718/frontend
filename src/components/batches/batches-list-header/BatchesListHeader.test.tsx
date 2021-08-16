import React from 'react';
import { mount } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import BatchListHeader from '.';

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

let wrapper: any;
const selectedFilter = 'all';
const setSelectedFilter = (filter: string) => {
  return filter;
};

describe('Batches', () => {
  beforeEach(() => {
    wrapper = mount(
      <BatchListHeader
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        batches={[
          {
            batchsize: 1,
            batchid: 1,
            curriculumid: 1,
            trainerid: 1,
            startdate: 'start date hehe',
            enddate: 'end date hehe',
          },
        ]}
      />
    );
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  /** Tests the add button */
  it('pressing the button navigates to new screen', () => {
    let button = wrapper
      .find({ testID: 'button' })
      .findWhere((node: any) => node.props().hasOwnProperty('onPress'))
      .last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalled();
  });
});
