import React from 'react';
import { mount, shallow } from 'enzyme';
import EditTrainer from '.';
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
describe('Create Trainer', () => {
  const trainer = {
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'johndoe@hotmail.com',
    ID: '0987654',
  };
  const mock = jest.fn();
  const wrapper = mount(
    /*wrapComponent(returnComponent(*/ <EditTrainer
      trainer={trainer}
      setEdit={mock}
    />
  ); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <EditTrainer
      trainer={trainer}
      setEdit={mock}
    />
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

  it('Should have all fields pre loaded with passed information', () => {
    wrapper.update();
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.FirstName))
        .last()
        .text()
    ).toEqual(trainer.FirstName);
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.LastName))
        .last()
        .text()
    ).toEqual(trainer.LastName);
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.Email))
        .last()
        .text()
    ).toEqual(trainer.Email);
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.ID))
        .last()
        .text()
    ).toEqual(trainer.ID);
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
      .findWhere((w) => w.text() === 'Update')
      .first();
    const mockEventHandler = jest.spyOn(sub.props(), 'onPress');
    // Enzyme usually allows wrapper.simulate() alternatively, but this doesn't support 'press' events.
    sub.props().onPress();
    expect(mockEventHandler).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(false);
  });
});
