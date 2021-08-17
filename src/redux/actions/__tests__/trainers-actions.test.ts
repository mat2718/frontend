import {addTrainer, deleteATrainer, getAllTrainers, updateTrainer} from '../trainers-actions'

const mockTrainer = {
    trainerid: 0,
    email: '',
    trainerfirst: '',
    trainerlast: '',
}

it('can run various action creators', () => {
    const mockDispatch = jest.fn();
    addTrainer(mockTrainer)(mockDispatch);
    deleteATrainer(0)();
    getAllTrainers()(mockDispatch);
    updateTrainer(mockTrainer)(mockDispatch);
})