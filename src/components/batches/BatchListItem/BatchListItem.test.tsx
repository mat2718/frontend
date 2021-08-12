import React from 'react';
import { mount, shallow } from 'enzyme';
import BatchListItem from './';
import { TouchableOpacity, Text } from 'react-native';


const today = new Date();
const yesterday = new Date(today);
const tomorrow = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setDate(tomorrow.getDate() + 1);

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return {
        navigate: mockNavigate,
      };
    },
  };
});

let wrap: any;

/** props for the component */
const props = {
  associate: 25,
  batchId: 0,
  curriculum: 'Cloud Native',
  trainer: 'Robert Connell',
  startDate: 1622505600000,
  endDate: 1627776000000,
};

describe('Batches', () => {
  beforeEach(() => {
    wrap = mount(<BatchListItem {...props} />);
  });

  /** tests if the component is there */
  it('should be there', () => {
    expect(wrap).not.toBe(undefined);
  });

  /** tests the button */
  it('should be pressable', () => {
    const shouldBePressed = wrap.find(TouchableOpacity).at(0);
    const myEventHandler = jest.spyOn(shouldBePressed.props(), 'onPress');

    const actualEventHandler = shouldBePressed.prop('onPress');
    actualEventHandler();

    expect(myEventHandler).toHaveBeenCalled();
  });

  /** tests the navigate button */
  it('pressing the button navigates to new screen', () => {
    let wrapper = shallow(<BatchListItem {...props} />);
    let button = wrapper.find({ testID: 'button' }).last();
    button.invoke('onPress')();
    expect(mockNavigate).toHaveBeenCalledWith('ViewBatch', props);
  });

  /** tests the if statements */
  it('should test the if statements', () => {
    wrap = mount(
      <BatchListItem
        associate={20}
        batchId={1}
        curriculum='React Native'
        trainer='Matthew Otto'
        startDate={yesterday.getTime()}
        endDate={tomorrow.getTime()}
      />
    );

    let displays = wrap
      .find(Text)
      .someWhere((node: any) => node.text().includes('Active'));
    expect(displays).toBeTruthy();
  });
});
