import IBatch from '../entities/batch';
import IOneBatch from '../entities/onebatch';
import ICurriculum from '../entities/curriculum';
import IClient from '../entities/client';
import IDemand from '../entities/demand';
import ISkill from '../entities/skill';
import ITrainer from '../entities/Trainer';

/**
 * Store - holds the state of the application
 * @author Joab Smith
 */

export interface IAppState {
  skills: ISkill[];
  clients: IClient[];
  demands: IDemand[];
  curricula: ICurriculum[];
  batches: IBatch[];
  onebatch: IOneBatch[];
  trainers: ITrainer[];
}

export const initialState: IAppState = {
  skills: [],
  clients: [],
  demands: [],
  curricula: [],
  batches: [],
  onebatch: [
    {
      batchsize: 0,
      curriculumname: '',
      enddate: '',
      startdate: '',
      trainerfirst: '',
      trainerlast: '',
      clientid: 0,
      batchid: 0,
      confirmed: false,
    },
  ],
  trainers: [],
};
