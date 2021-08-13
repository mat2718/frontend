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
      const res = await axios.get(`client/name/${clientName}`);      
     return (res.data)
      
    } catch (e) {
      console.log(e);
    }
  };
/** Gets one client by ID*/
export const getClientByID =
  (clientID: number) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`client/id/${clientID}`);     
       return (res.data)
      
    } catch (e) {
      console.log(e);
    }
  };
  
/** adds a client */
export const addClient = 
(client:string) => async (dispatch: Dispatch) => {
    try {
       const res =await axios.post('client',{
          clientname:client});
       return(res.data)

          
       `` }catch (e) {
              console.log(e)
          }
        };