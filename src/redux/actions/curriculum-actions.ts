import axios from '../../../axiosConfig';
import ICurriculum from '../../entities/curriculum';
import { AppActions, IAppAction } from './actions';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ISkill from '../../entities/skill';

/**
 * Handler for Curricula - Axios requests to database for curricula
 * @param {ICurriculum || IAppAction} interface - lists properties of curricula and expected payload
 * @returns {success || err} - a message confirming response of action
 * @author Hannah Mulato
 */

//api call for getting all curricula
export const GetAllCurricula = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    await axios.get('curriculum').then((res) => {
      const curricula: ICurriculum[] = res.data;
      dispatch({
        type: AppActions.UPDATE_CURRICULA,
        payload: {
          skills: [],
          clients: [],
          batches: [],
          demands: [],
          trainers: [],
          curricula,
        },
      });
      return 'Retrieved curricula';
    });
  } catch (err) {
    console.log(err);
  }
};

/**api call for getting a specific curriculum by ID
 * @param {id} number
 */

// export const GetCurriculum = (id: number) => async () => {
//   try {
//     const res: AxiosResponse = await axios.get(`curriculum/id/${id}`);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//   }
// };

//api call to post a new curriculum
export const PostCurriculum =
  (curriculum: {
    curriculumname: string;
    createdby: string;
    createdon: string;
    skillIdArr: any[];
  }) =>
  async (dispatch: Dispatch<IAppAction>) => {
    try {
      await axios.post('curriculum', curriculum);
      (() => {
        const dispatcher = useDispatch();
        dispatcher(GetAllCurricula());
      })();
      return `${curriculum.curriculumname} has been added.`;
    } catch (err) {
      console.log(err);
    }
  };

/**api call for deleting a specific curriculum by ID
 * @param {id} number
 */
// export const DeleteCurriculum = (curriculum: ICurriculum) => async () => {
//   try {
//     await axios.delete(`curriculum/id/${curriculum.curriculumid}`);
//     (() => {
//       const dispatcher = useDispatch();
//       dispatcher(GetAllCurricula());
//     })();
//     GetAllCurricula();
//     return 'Curriculum has been deleted.';
//   } catch (err) {
//     console.log(err);
//   }
// };
