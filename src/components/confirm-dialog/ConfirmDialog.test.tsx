import React from 'react';
import { mount, shallow } from 'enzyme';
import { Button } from 'react-native-paper';
import ConfirmDialog from '.';

jest.mock('react-native-toast-message', () => {
  return ({
    __esModule: true,
    ...jest.requireActual('react-native-toast-message'),
    default: {
      show: jest.fn(),
    },
  });
});

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({ 
        goBack: mockGoBack,
      });
    },
  });
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  return ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
  });
});

/**
 * Confirm Dialog Test - test file for the ConfirmDialogComponent
 * @author Oriel Red Oral
 */

let wrapper: any;

const mockSetVisible = jest.fn();
const propsWithoutType = {
  visible: true,
  setVisible: mockSetVisible,
  payload: {
    batchId: 69,
    trainerId: 420,
    curriculumId: 420,
    skillId: 69,
  }
};

describe('tests the confirm dialog component', () => {
  beforeEach(() => {
    wrapper = mount(<ConfirmDialog type='confirmBatch' {...propsWithoutType}/>);
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

  const arr = ['confirmBatch', 'deleteBatch', 'deleteSkill', 'default'];
  it.each(arr)('no runtime errors on any button in %s', (str) => {
    wrapper = shallow(<ConfirmDialog type={str} {...propsWithoutType} />);
    let buttons = wrapper
      .find(Button)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress')
      );
    buttons.forEach( (button:any) => {
      button.invoke('onPress')();
    });
  });
});
