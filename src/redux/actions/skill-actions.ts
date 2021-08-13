import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import { AppActions } from './actions';

/** Gets all skills from the backend */
export const getAllSkills = async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Gets one skill by id */
export const getSkillById = (skillId: number) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`skill/id/${skillId}`);
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Gets one skill by name */
export const getSkillByName =
  (skillName: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`skill/id/${skillName}`);
      dispatch({
        type: AppActions.UPDATE_SKILL,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

/** Creates a skill */
export const addSkill = (skill: {}) => async (dispatch: Dispatch) => {
  try {
    await axios.post(`skill`, skill);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

/** Deletes a skills */
export const deleteSkill = (batchId: number) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`skill/id/${batchId}`);
    const res = await axios.get('skill');
    dispatch({
      type: AppActions.UPDATE_SKILL,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
