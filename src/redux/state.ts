import IBatch from "../entities/batch";
import ICirriculum from "../entities/cirriculum";
import IClient from "../entities/client";
import IDemand from "../entities/demand";
import ISkill from "../entities/skill";
import ITrainer from "../Entities/Trainer";

export interface IAppState {
  skills: ISkill[];
  clients: IClient[];
  demands: IDemand[];
  cirricula: ICirriculum[];
  batches: IBatch[];
  trainers: ITrainer[];
}

export const initialState: IAppState = {
  skills: [],
  clients: [],
  demands: [],
  cirricula: [],
  batches: [],
  trainers: [],
};
