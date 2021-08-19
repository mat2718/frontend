import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions, IAppAction } from './actions';
import ISkill from '../../entities/skill';

/**
 * Gets all skills from the backend 
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @author Oriel Red Oral
 */

export const getAllSkills = () => async (dispatch: Dispatch) => {
  try {
    await axios.get('skill').then((res) => {
      const skills: ISkill[] = res.data;
      dispatch({
        type: AppActions.UPDATE_SKILL,
        payload: { skills: res.data },
      });
    });
  } catch (e) {
    return e;
  }
};

/**
 * Creates a skill  
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @author Oriel Red Oral
 */
export const addSkill = (skill: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`skill`, skill);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: { skills: res.data },
    });
  } catch (e) {
    return e;
  }
};

/**
 * Deletes a skill by skillId 
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @author Oriel Red Oral
 */

export const deleteSkill = (skillId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`skill/id/${skillId}`);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: { skills: res.data },
    });
  } catch (e) {
    return e;
  }
};
