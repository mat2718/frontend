export default interface IBatch {
  batchSize: number;
  curriculumId: number;
  endDate: string;
  startDate: string;
  trainerId: number | null;
  clientId: number | null;
  batchId: number;
}
