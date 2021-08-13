import IBatch from "./batch";
import ISkill from "./skill";

export default interface ICurriculum {
  createdBy: string;
  createdOn: string;
  modifiedBy: string;
  modifiedOn: string;
  curriculumname: string;
  skillIdArr: ISkill[];
  batchArr: IBatch[];
  curriculumId: number;
}
