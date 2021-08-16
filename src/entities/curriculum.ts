import IBatch from "./batch";
import ISkill from "./skill";

export default interface ICurriculum {
  createdby: string;
  createdon: string;
  lastmodified: string;
  lastmodifiedby: string;
  curriculumname: string;
  skillidarr: [];
  skillnamearr: [];
  curriculumid: number;
}
