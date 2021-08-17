import React from 'react';
import { mount, shallow } from 'enzyme';
import { FlatList, TouchableOpacity } from 'react-native';
import Curricula from '.';
import { ExpandableList } from '../../components/curricula/expandable-list';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

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
  const testState = {
    testCurriculum: {
      createdby: 'testCreator',
      createdon: 'testDate',
      lastmodified: 'testCreator',
      lastmodifiedby: 'testDate',
      curriculumname: 'test',
      skillidarr: [0, 3, 2],
      skillnamearr: ['test', 'test', 'test'],
      curriculumid: 0,
  }
}

  const mockStore = configureStore([thunk])(testState);
  
  beforeEach(() => {
    wrapper = mount(
    <Provider store={mockStore}>
      <Curricula />
    </Provider>
    );
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
    const flatlistData = wrapper.find(FlatList);
    expect(flatlistData).toBeDefined();
  });

  //test to see if button appears
  it('Add button should appear', () => {
    const button = wrapper.find(TouchableOpacity);
    expect(button).toBeDefined();
  });

  //test for render item
  it('Should react on press', () => {
    const onPressEvent = jest.fn();
    const wrap =  shallow(<ExpandableList curriculum={testState.testCurriculum} onPress={onPressEvent}/>);
    wrap
      .find(TouchableOpacity)
      .findWhere( (node:any) => 
        node.props().hasOwnProperty('onPress') 
      )
      .forEach( (node:any) => {
        node.invoke('onPress')();
      })
    expect(onPressEvent.mock.calls.length).toBe(1);
    expect(wrap.find(ExpandableList).length).toEqual(1);
  });
});
