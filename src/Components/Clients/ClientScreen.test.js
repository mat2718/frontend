import {mount} from 'enzyme';
import { ExampleComponent } from '../../../__tests__/constants';
import ClientScreen from './ClientScreen';

let wrapper;


describe('testing client screen',()=>{

    beforeEach(()=>{
        wrapper=mount(<ClientScreen/>)
    })

    it('should render correctly on screen',()=>{
        expect(wrapper).toBeDefined();
    })
})


