import IBatch from "../../entities/batch";
import ICurriculum from "../../entities/curriculum";
import IClient from "../../entities/client";
import IDemand from "../../entities/demand";
import ISkill from "../../entities/skill";
import ITrainer from "../../entities/Trainer";

export enum AppActions {
  UPDATE_SKILL,
  UPDATE_CLIENT,
  UPDATE_CURRICULA,
  UPDATE_BATCH,
  UPDATE_TRAINER,
  UPDATE_DEMAND,
}

export interface IAppAction {
  type: AppActions;
  payload: {
    skills: ISkill[];
    clients: IClient[];
    demands: IDemand[];
    curricula: ICurriculum[];
    batches: IBatch[];
    trainers: ITrainer[];
  };
}
