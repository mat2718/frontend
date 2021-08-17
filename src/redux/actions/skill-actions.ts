import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions, IAppAction } from './actions';
import ISkill from '../../entities/skill';

/** Gets all skills from the backend */
export const getAllSkills = () => async (dispatch: Dispatch) => {
  try {
    await axios.get('skill').then((res) => {
      const skills: ISkill[] = res.data;
      console.log('response', res.data, skills);
      dispatch({
        type: AppActions.UPDATE_SKILL,
        payload: { skills: res.data },
      });
    });
  } catch (e) {
    console.log(e);
  }
};

/** Gets one skill by id */
// export const getSkillById = async (skillId: number) => {
//   try {
//     const res = await axios.get(`skill/id/${skillId}`);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

/** Gets one skill by name */
// export const getSkillByName =
//   (skillName: string) => async (dispatch: Dispatch) => {
//     try {
//       const res = await axios.get(`skill/id/${skillName}`);
//       dispatch({
//         type: AppActions.UPDATE_SKILL,
//         payload: { skills: res.data },
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

/** Creates a skill */
export const addSkill = (skill: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`skill`, skill);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: { skills: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};

/** Deletes a skills */
export const deleteSkill = (skillId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`skill/id/${skillId}`);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: { skills: res.data },
    });
  } catch (e) {
    console.log(e);
  }
};
