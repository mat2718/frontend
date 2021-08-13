import ISkill from "./skill";

export default interface ICirriculum {
  createdby: string;
  createdon: string;
  curriculumname: string;
  skillIdArr: ISkill[];
  curriculumId: number;
}
