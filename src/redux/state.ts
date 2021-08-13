import IBatch from "../entities/batch";
import ICurriculum from "../entities/curriculum";
import IClient from "../entities/client";
import IDemand from "../entities/demand";
import ISkill from "../entities/skill";
import ITrainer from "../entities/Trainer";

export interface IAppState {
  skills: ISkill[];
  clients: IClient[];
  demands: IDemand[];
  curricula: ICurriculum[];
  batches: IBatch[];
  trainers: ITrainer[];
}

export const initialState: IAppState = {
  skills: [],
  clients: [],
  demands: [],
  curricula: [],
  batches: [],
  trainers: [],
};
