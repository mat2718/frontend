export default interface IOneBatch {
  batchsize: number;
  curriculumname: string;
  enddate: string;
  startdate: string;
  trainerfirst: string;
  trainerlast: string;
  clientid: number | null;
  batchid: number;
  confirmed: boolean;
}

export interface IBatchAxios {
  data: {
    batchsize: number;
    curriculumname: number;
    enddate: string;
    startdate: string;
    trainerfirst: number | null;
    trainerlast: number | null;
    clientid: number | null;
    batchid: number;
    confirmed: boolean;
  }[];
}
