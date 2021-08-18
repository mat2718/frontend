import { getAllSkills, addSkill, deleteSkill } from '../skill-actions';

it('can run verious action creators', () => {
    const mockDispatch = jest.fn();
    getAllSkills()(mockDispatch);
    addSkill({})(mockDispatch);
    deleteSkill(0)(mockDispatch);
});