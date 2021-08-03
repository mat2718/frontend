import { mount } from 'enzyme';
import { wrapComponent } from './functions';


const returnComponent = (userName = 'dummyuser') => {
    const props = {
        username: userName,
    }
    return () => {
        return <ExampleComponent {...props}/>
    }
}

jest.mock('./constants', () => {
    return ({
        __esModule: true,
        AnotherComponent: () => {
            return <></>
        },
        default: () => {
            return <></>
        },
    });
});

let wrapper;
let shallowWrap;
const username;

describe('some examples of tests you could write', () => {

    beforeEach('', () => {
        wrapper = mount( wrapComponent(returnComponent(username)) );
        shallowWrap = mount ( wrapComponent(returnComponent(username)) );
    });

    it('should contain a textbox welcoming the user', () => {
        expect(
            wrapper.findWhere( node => 
                node.text().toLowerCase.includes(username)
            )
        ).toBe(1);
    });

    it('has pressable text with functional press event handler', () => {
        const wrap = shallowWrap.findWhere( node => 
            node.text().toLowerCase().includes(username)
        );
        const mockEventHandler = jest.spyOn(wrap.props(), 'onPress');
        wrap.simulate('press');
        expect(mockEventHandler).toHaveBeenCalled();
    });

});