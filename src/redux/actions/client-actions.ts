import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions } from './actions';

/** Gets all clients  */
export const getAllClients = async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('/client');
    dispatch({
      type: AppActions.UPDATE_CLIENT,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
/** Gets one client by name */
export const getClientByName =
  (clientName: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`/client/id/${clientName}`);
      dispatch({
        type: AppActions.UPDATE_CLIENT,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
