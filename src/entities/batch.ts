export default interface IBatch {
  batchsize: number;
  curriculumid: number;
  enddate: string;
  startdate: string;
  trainerid: number | null;
  clientid: number | null;
  batchid: number;
}
