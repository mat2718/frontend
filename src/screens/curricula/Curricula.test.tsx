import React from 'react';
import { mount, shallow } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import Curricula, { DATA } from '.';
import { ExpandableList } from '../../components/curricula/expandable-list';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native' , () => {
  return ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => {
      return ({
        navigate: mockNavigate,
      })
    },
  });
});

describe('Curricula', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<Curricula />);
  });

  //test if the component is working
  it('Component should appear', () => {
    expect(wrapper).toBeDefined();
  });

  //test if the flatlist renders
  it('Flatlist should appear', () => {
    const flatList = wrapper.find(FlatList);
    expect(flatList.length).toBeDefined();
  });

  //test for flatlist holding data needed
  it('Flatlist should have data', () => {
    const flatlistData = wrapper.find(FlatList).props(DATA);
    expect(flatlistData).toBeDefined();
  });

  //test to see if button appears
  it('Add button should appear', () => {
    const button = wrapper.find(TouchableOpacity);
    expect(button).toBeDefined();
  });

  it('Should react on press', () => {
    const onPressEvent = jest.fn();
    const wrap =  shallow(<ExpandableList item={{batches: ['a','b'], skills: ['c','d']}} onPress={onPressEvent}/>);
    wrap
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress') 
      )
      .forEach( (node:any) => {
        node.invoke('onPress')();
      })
    expect(onPressEvent.mock.calls.length).toBe(1);
  });
});
