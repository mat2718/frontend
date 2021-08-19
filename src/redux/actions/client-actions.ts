import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions } from './actions';

/** Gets all clients  */
export const getAllClients = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('client');
    dispatch({
      type: AppActions.UPDATE_CLIENT,
      payload: { clients: res.data },
    });
  } catch (e) {
    return e;
  }
};

/** adds a client */
export const addClient = (client: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post('client', client);
    const res = await axios.get('client');
    dispatch({
      type: AppActions.UPDATE_CLIENT,
      payload: { clients: res.data },
    });
    return res.data``;
  } catch (e) {
    return e
  }
};
