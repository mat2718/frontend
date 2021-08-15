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
    console.log(e);
  }
};
/** Gets one client by name */
export const getClientByName = (clientName: string) => async () => {
  try {
    const res = await axios.get(`client/name/${clientName}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/** Gets one client by ID*/
export const getClientByID = (clientID: number) => async () => {
  try {
    const res = await axios.get(`client/id/${clientID}`);
    return res.data;
  } catch (e) {
    console.log(e);
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
    console.log(e);
  }
};
