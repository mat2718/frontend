import React from 'react';
import { mount, shallow } from 'enzyme';
import ViewEditTrainer from '.';
import { useRoute } from '@react-navigation/native';
import ITrainer from '../../Entities/Trainer';

jest.mock('@react-navigation/native');
/**
 * Authors: Joab Smith and Imran Ilyas
 **/
describe('View/Edit Trainer', () =>
{
  const trainer: ITrainer = {
    trainerfirst: 'John',
    trainerlast: 'Doe',
    email: 'johndoe@hotmail.com',
    trainerid: 1
  }
  useRoute.mockReturnValue({
    params: {
      ...trainer
    } as ITrainer
  })
  const wrapper = mount(
    /*wrapComponent(returnComponent(*/ <ViewEditTrainer />
  ); //)
  const shallowWrapper = shallow(
    /*wrapComponent(returnComponent(*/ <ViewEditTrainer />
  ); //)

  it('Should contain all labels and Input fields', () =>
  {
    //firstname, lastname, email
    expect(wrapper.find('TextInput')).toHaveLength(3);

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

  it('Should have all fields pre loaded with passed information', () =>
  {
    wrapper.update();
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.trainerfirst))
        .last()
        .text()
    ).toEqual(trainer.trainerfirst);
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.trainerlast))
        .last()
        .text()
    ).toEqual(trainer.trainerlast);
    expect(
      wrapper
        .find('TextInput')
        .findWhere((node) => node.text().includes(trainer.email))
        .last()
        .text()
    ).toEqual(trainer.email);

  });

  it('Should have a submit button', () =>
  {
    const submit = shallowWrapper.find('TouchableOpacity');
    expect(submit).toBeDefined();
  });

  it('Should update states on text input', () =>
  {
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
  });


  it('should call submit function when button is pressed', () =>
  {
    const sub = wrapper
      .find('TouchableOpacity')
      .findWhere((w) => w.text() === 'Update')
      .first();
    const mockEventHandler = jest.spyOn(sub.props(), 'onPress');
    // Enzyme usually allows wrapper.simulate() alternatively, but this doesn't support 'press' events.
    sub.props().onPress();
    expect(mockEventHandler).toHaveBeenCalled();
  });
});