import { mount, shallow } from 'enzyme';
import { Pressable } from 'react-native';
import { wrapComponent } from './functions';
import  { ExampleComponent } from './constants';

let wrapper;
let shallowWrap;
const username = 'dummyuser';

describe('some examples of tests you could write', () => {

    beforeEach( () => {
        wrapper = mount( <ExampleComponent username={username} /> );
        shallowWrap = shallow( <ExampleComponent username={username} /> );
    });

    it('should contain a textbox welcoming the user', () => {
        const node = wrapper.findWhere( node_ => 
            node_.text().toLowerCase().includes(username)
        );
        console.log(node.last().debug());
        expect(node.length).toBeGreaterThan(0);
        
    });

    it('has pressable text with functional event handler', () => {        
        const wrap = shallowWrap.find(Pressable);
        // console.log(wrap.debug());
        const mockEventHandler = jest.spyOn(wrap.props(), 'onPress');
        wrap.simulate('press');
        expect(mockEventHandler).toHaveBeenCalled();
    });

});


//==============================================================================
// Now let's fancy
//

// const returnComponent = (userName = 'dummyuser') => {
//     const props = {
//         username: userName,
//     }
//     return () => {
//         return <ExampleComponent {...props}/>
//     }
// }

// jest.mock('./constants', () => {
//     return ({
//         __esModule: true,
//         AnotherComponent: () => {
//             return <></>
//         },
//         default: () => {
//             return <></>
//         },
//     });
// });

// describe('some examples of tests you could write, but with the wrapComponent function', () => {

//     beforeEach( () => {
//         wrapper = mount( wrapComponent(returnComponent(username)) );
//         // shallowWrap = shallow( wrapComponent(returnComponent(username)) );
//     });

//     it('should contain a textbox welcoming the user', () => {
//         expect(
//             wrapper.findWhere( node => 
//                 node.text().toLowerCase.includes(username)
//             )
//         ).toBeGreaterThan(0);
//     });

//     it('has pressable text with functional press event handler', () => {
//         const wrap = wrapper.find(Pressable);
//         const shallowed = shallow(wrap.getElement());
//         const mockEventHandler = jest.spyOn(shallowed.props(), 'onPress');
//         shallowed.simulate('press');
//         expect(mockEventHandler).toHaveBeenCalled();
//     });

});

// describe("One more thing: the dangers of finding components by prop", () => {
// });