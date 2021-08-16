import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions } from './actions';
import { IBatchAxios } from '../../entities/onebatch';

/** Gets all batches from the backend */
export const getAllBatches = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('batch');

    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: { batches: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};

/** Gets one batch from the backend */
export const getBatchById =
  (batch: { batchId: number; trainerId: number; curriculumId: number }) =>
  async (dispatch: Dispatch) => {
    try {
      const onebatch: IBatchAxios = await axios.get(
        `batch/id/${batch.batchId}`
      );
      const trainer: IBatchAxios = await axios.get(
        `trainer/id/${batch.trainerId}`
      );
      const curriculum = await axios.get(`curriculum/id/${batch.curriculumId}`);
      dispatch({
        type: AppActions.UPDATE_ONE_BATCH,
        payload: {
          onebatch: [
            {
              batchsize: onebatch.data[0].batchsize,
              curriculumname: curriculum.data[0].curriculumname,
              enddate: onebatch.data[0].enddate,
              startdate: onebatch.data[0].startdate,
              trainerfirst: trainer.data[0].trainerfirst,
              trainerlast: trainer.data[0].trainerlast,
              clientid: onebatch.data[0].clientid,
              batchid: onebatch.data[0].batchid,
              confirmed: onebatch.data[0].confirmed,
            },
          ],
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

/** Confirms a batch */
export const confirmBatch = (batchId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.patch(`batch/id/${batchId}`);
    const batch = await axios.get('batch');
    const onebatch = await axios.get(`batch/id/${batchId}`);
    dispatch({
      type: AppActions.UPDATE_ONE_BATCH,
      payload: { onebatch: onebatch.data },
    });
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: { batches: batch.data },
    });
  } catch (e) {
    console.log(e);
  }
};

/** Creates a batch */
export const addBatch = (batch: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`batch`, batch);
    const res = await axios.get('batch');

    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: { batches: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};

/** Update a batch */
export const updateBatch =
  (batch: {
    batchId: number;
    trainerId: number;
    curriculumId: number;
    batchSize: number;
    startDate: string;
    endDate: string;
    clientId: null;
  }) =>
  async (dispatch: Dispatch) => {
    try {
      await axios.put(`batch`, batch);
      const batchres = await axios.get('batch');
      const onebatch: IBatchAxios = await axios.get(
        `batch/id/${batch.batchId}`
      );
      const trainer: IBatchAxios = await axios.get(
        `trainer/id/${batch.trainerId}`
      );
      const curriculum = await axios.get(`curriculum/id/${batch.curriculumId}`);
      dispatch({
        type: AppActions.UPDATE_BATCH,
        payload: { batches: batchres.data },
      });
      dispatch({
        type: AppActions.UPDATE_ONE_BATCH,
        payload: {
          onebatch: [
            {
              batchsize: onebatch.data[0].batchsize,
              curriculumname: curriculum.data[0].curriculumname,
              enddate: onebatch.data[0].enddate,
              startdate: onebatch.data[0].startdate,
              trainerfirst: trainer.data[0].trainerfirst,
              trainerlast: trainer.data[0].trainerlast,
              clientid: onebatch.data[0].clientid,
              batchid: onebatch.data[0].batchid,
              confirmed: onebatch.data[0].confirmed,
            },
          ],
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

/** Deletes a batch */
export const deleteBatch = (batchId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`batch/id/${batchId}`);
    const res = await axios.get('batch');
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: { batches: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};
