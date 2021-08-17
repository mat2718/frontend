import IBatch from "./batch";
import ISkill from "./skill";

export default interface ICurriculum {
  createdby: string;
  createdon: string;
  lastmodified: string;
  lastmodifiedby: string;
  curriculumname: string;
<<<<<<< HEAD
  skillidarr: any[];
  skillnamearr: any[];
=======
  skillidarr: number[];
  skillnamearr: string[];
>>>>>>> dev-branch
  curriculumid: number;
}
