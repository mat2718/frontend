import React from 'react';
import { mount } from 'enzyme';
import SkillsListHeader from '.';

/**
 * Skill List Header Test - test file for the SkillListHeader component
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

let wrapper: any;

describe('tests SkillListHeader', () => {
  beforeEach(() => {
    wrapper = mount(<SkillsListHeader />);
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
