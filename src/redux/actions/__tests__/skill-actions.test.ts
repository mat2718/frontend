import { getAllSkills, getSkillById, getSkillByName, addSkill, deleteSkill } from '../skill-actions';

it('can run verious action creators', () => {
    const mockDispatch = jest.fn();
    getAllSkills()(mockDispatch);
    getSkillById(0);
    getSkillByName('yeet')(mockDispatch);
    addSkill({})(mockDispatch);
    deleteSkill(0)(mockDispatch);
});