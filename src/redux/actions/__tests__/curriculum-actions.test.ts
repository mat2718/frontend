import { GetAllCurricula, PostCurriculum } from "../curriculum-actions";

const mockCurriculum = {
    curriculumname: '',
    createdby: '',
    createdon: '',
    skillIdArr: [],
};

const mockCurriculum2 = {
  createdby: '',
  createdon: '',
  lastmodified: '',
  lastmodifiedby: '',
  curriculumname: '',
  skillidarr: [1],
  skillnamearr: ['name'],
  curriculumid: 0,
};

it('can execute various action creators', () => {
    const mockDispatch = jest.fn();
    GetAllCurricula()(mockDispatch);
    PostCurriculum(mockCurriculum)(mockDispatch)
})