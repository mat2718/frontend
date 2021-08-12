import React from 'react';
import { mount, shallow } from 'enzyme';
import CreateTrainer from '.';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
describe('Create Trainer', () => {
  const wrapper = mount(/*wrapComponent(returnComponent(*/ <CreateTrainer />); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <CreateTrainer />
  ); //)

  it('Should contain all labels and Input fields', () => {
    //firstname, lastname, email, id
    expect(wrapper.find('TextInput')).toHaveLength(4);
    expect(
      shallowWrapper.findWhere((node) =>
        node.text().toLowerCase().includes('id')
      )
    ).toHaveLength(1);
    expect(
      shallowWrapper.findWhere((node) =>
        node.text().toLowerCase().includes('first')
      )
    ).toHaveLength(1);
    expect(
      shallowWrapper.findWhere((node) =>
        node.text().toLowerCase().includes('last')
      )
    ).toHaveLength(1);
    expect(
      shallowWrapper.findWhere((node) =>
        node.text().toLowerCase().includes('email')
      )
    ).toHaveLength(1);
  });

  it('Should have a submit button', () => {
    const submit = shallowWrapper.find('TouchableOpacity');
    expect(submit).toBeDefined();
  });

  it('Should update states on text input', () => {
    const inputFN = wrapper
      .findWhere((node) => node.prop('placeholder') === 'First Name')
      .last()
      .getElement();
    let shallowInput = shallow(inputFN);
    const mockEventHandler = jest.fn();
    if (shallowInput.props().hasOwnProperty('onChangeText')) {
      shallowInput.setProps({ onChangeText: mockEventHandler });
      shallowInput.simulate('changeText', 'John');
    }
    expect(mockEventHandler).toBeCalled();
    expect(mockEventHandler).toBeCalledWith('John');

    const inputLN = shallowWrapper
      .findWhere((node) => node.prop('placeholder') === 'Last Name')
      .last()
      .getElement();
    shallowInput = shallow(inputLN);

    if (shallowInput.props().hasOwnProperty('onChangeText')) {
      shallowInput.setProps({ onChangeText: mockEventHandler });
      shallowInput.simulate('changeText', 'Smith');
    }
    expect(mockEventHandler).toBeCalled();
    expect(mockEventHandler).toBeCalledWith('Smith');

    const inputEmail = shallowWrapper
      .findWhere((node) => node.prop('placeholder') === 'Email')
      .last()
      .getElement();
    shallowInput = shallow(inputEmail);

    if (shallowInput.props().hasOwnProperty('onChangeText')) {
      shallowInput.setProps({ onChangeText: mockEventHandler });
      shallowInput.simulate('changeText', 'Email@site.com');
    }
    expect(mockEventHandler).toBeCalled();
    expect(mockEventHandler).toBeCalledWith('Email@site.com');

    const inputID = shallowWrapper
      .findWhere((node) => node.prop('placeholder') === 'ID Number')
      .last()
      .getElement();
    shallowInput = shallow(inputID);

    if (shallowInput.props().hasOwnProperty('onChangeText')) {
      shallowInput.setProps({ onChangeText: mockEventHandler });
      shallowInput.simulate('changeText', '12345');
    }
    expect(mockEventHandler).toBeCalled();
    expect(mockEventHandler).toBeCalledWith('12345');
  });

  it('should call submit function when button is pressed', () => {
    const sub = wrapper
      .find('TouchableOpacity')
      .findWhere((w) => w.text() === 'Submit')
      .first();
    const mockEventHandler = jest.spyOn(sub.props(), 'onPress');
    // Enzyme usually allows wrapper.simulate() alternatively, but this doesn't support 'press' events.
    sub.props().onPress();
    expect(mockEventHandler).toHaveBeenCalled();
  });
});
