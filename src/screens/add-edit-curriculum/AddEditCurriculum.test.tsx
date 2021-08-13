import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/batches/header';
import AddEditCurriculum from '.'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native';

let wrapper: any;

describe('AddEditCurriculum', () => {
  beforeEach(() => {
    wrapper = mount(
      <AddEditCurriculum
        route={{
          params: {
            curriculumName: 'Curriculum',
            createdOn: 1622505600000,
            modifiedOn: 1627776000000,
            createdBy: 'Robert Connell',
            modifiedBy: 'Robert Connell',
            skills: [0, 1, 2],
            batches: [2, 3, 4],
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
    const shouldBeHeader = wrapper.find(<Header />);
    expect(shouldBeHeader).toBeDefined();
  });

  //tests
  // it('should have labels and input fields', () => {
  //   expect(wrapper.find('TextInput')).toHaveLength(4);

  //   expect(wrapper.findWhere((node:any) => 
  //   node.text().toLowerCase().includes('createdBy'))
  //   ).toBeDefined();

  //   expect(wrapper.findWhere((node:any) => 
  //   node.text().toLowerCase().includes('modifiedBy'))
  //   ).toBeDefined();

  //   expect(wrapper.findWhere((node:any) => 
  //   node.text().toLowerCase().includes('batches'))
  //   ).toBeDefined();

  //   expect(wrapper.findWhere((node:any) => 
  //   node.text().toLowerCase().includes('skills'))
  //   ).toBeDefined();
  // });

  // not yet implemented
  // it('onPress should run', () => {
  //   const pickerBtn = wrapper.find({testID: 'pickerBtn'}).last();
  //   pickerBtn.invoke('onPress')()
  //   expect(wrapper.find(DateTimePicker).length).toBeGreaterThan(0)
  // });

  it('textInput can run onChange text', () => {
    wrapper.find(TextInput).forEach((node: any) => {
      node.invoke('onTextChange')('hello')
    })
  })
});

// yeet
