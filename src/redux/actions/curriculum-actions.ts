import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import ICurriculum from '../../entities/curriculum';
import { AppActions } from './actions';

//api call for getting all curricula
export const GetAllCurricula = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('curriculum');
    dispatch({
      type: AppActions.UPDATE_CURRICULA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

/**api call for getting a specific curriculum by ID
 *
 * @param id
 *
 */

export const GetCurriculum = (id: number) => async (dispatch: Dispatch) => {
  try {
    return await axios.get(`/curriculum/id/${id}`);
    // dispatch({
    //     type: AppActions.UPDATE_CURRICULA,
    //     payload: res.data
    // });
  } catch (err) {
    console.log(err);
  }
};

//api call to post a new curriculum
export const PostCurriculum =
  (curriculum: {}) => async (dispatch: Dispatch) => {
    try {
      await axios.post('/curriculum', curriculum);
      GetAllCurricula();
      // const res = await axios.get('/curriculum');
      // dispatch({
      //     type: AppActions.UPDATE_CURRICULA,
      //     payload: res.data
      // });
    } catch (err) {
      console.log(err);
    }
  };

/**api call for deleting a specific curriculum by ID
 *
 * @param id
 *
 */
export const DeleteCurriculum = (id: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`/curriculum/id/${id}`);
    GetAllCurricula();
    // const res = await axios.get('/curriculum');
    // dispatch({
    //     type: AppActions.UPDATE_CURRICULA,
    //     payload: res.data
    // })
    return 'Curriculum has been deleted.';
  } catch (err) {
    console.log(err);
  }
};
