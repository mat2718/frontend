import AddDemand from "./index";
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

let wrapper: any;
const store = createStore(Reducer, applyMiddleware(thunk))

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

const route = {
    params: {
        clientid: 2,
        clientname: "Revature"
    }
}
describe('AddDemand', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AddDemand route={route}/>
      </Provider>
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

});