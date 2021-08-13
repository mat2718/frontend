import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions } from './actions';

/** Gets all batches from the backend */
export const getAllBatches = async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('/batch');
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Gets one batch from the backend */
export const getBatchById = (itemId: number) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`/batch/id/${itemId}`);
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Confirms a batch */
export const confirmBatch = (batchId: number) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.patch(`/batch/id/${batchId}`);
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Creates a batch */
export const addBatch = (batch: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`/batch/${batch}`);
    const res = await axios.get('/batch');
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Deletes a batch */
export const deleteBatch = (batchId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`/batch/id/${batchId}`);
    const res = await axios.get('/batch');
    dispatch({
      type: AppActions.UPDATE_BATCH,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
