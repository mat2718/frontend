import IBatch from "./batch";
import ISkill from "./skill";

export default interface ICurriculum {
  createdby: string;
  createdon: string;
  lastmodified: string;
  lastmodifiedby: string;
  curriculumname: string;
  skillidarr: any[];
  skillnamearr: any[];
  curriculumid: number;
}
