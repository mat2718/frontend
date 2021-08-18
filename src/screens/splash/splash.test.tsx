import Splash from "./splash";
import { mount} from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from '../../redux/reducer';
import thunk from 'redux-thunk';

let wrapper: any;
const store = createStore(Reducer, applyMiddleware(thunk))

describe('Splash', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Splash/>
      </Provider>
    );
  });

  it('should be there', () => {
    expect(wrapper).not.toBe(undefined);
  });

});