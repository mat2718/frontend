import { Reducer } from './reducer';

const state = {
    trainers: null,
    onebatch: null,
    skills: null,
    demands: null, 
    curricula: null, 
    clients: null,
}

const arr = [0,1,2,3,4,5,6,7]
it.each(arr)('tests the Reducer with action of type %i', (i) => {
    Reducer(state, {type: i, payload: state});
})