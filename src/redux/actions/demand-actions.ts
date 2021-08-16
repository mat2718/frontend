import axios from '../../../axiosConfig';
import { Dispatch } from 'redux';
import IDemand from '../../entities/Demand';
import { AppActions, IAppAction } from './actions';
import { IAppState } from '../state';
import { useSelector } from 'react-redux';

export const getAllDemand = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get('demand');
    dispatch({
      type: AppActions.UPDATE_DEMAND,
      payload: {
        skills: [],
        clients: [],
        batches: [],
        onebatch: [],
        curricula: [],
        demands: res.data,
        trainers: [],
      },
    });
    return 'Retrieved all Client Demands';
  } catch (error) {
    return error.response.data;
  }
};

export const addDemand =
  (demand: {}) => async (dispatch: Dispatch<IAppAction>) => {
    try {
      await axios.post('demand', demand);
      const res = await axios.get('demand');
      dispatch({
        type: AppActions.UPDATE_DEMAND,
        payload: {
          skills: [],
          clients: [],
          batches: [],
          onebatch: [],
          curricula: [],
          demands: res.data,
          trainers: [],
        },
      });

      return 'Demand has been added';
    } catch (error) {
      console.log(error);
    }
  };

export const getDemandById =
  (demandId: number) => async (dispatch: Dispatch<IAppAction>) => {
    try {
      return await axios.get(`demand/id/${demandId}`);
    } catch (error) {
      return error.response.data;
    }
  };

export const getDemandByDate =
  (startDate: string, endDate: string) =>
  async (dispatch: Dispatch<IAppAction>) => {
    try {
      return await axios.get(`demand/date/${startDate}/${endDate}`);
    } catch (error) {
      return error.response.data;
    }
  };

export const getDemandByCurrId =
  (curriculumId: number) => async (dispatch: Dispatch<IAppAction>) => {
    try {
      return await axios.get(`demand/curriculum/${curriculumId}`);
    } catch (error) {
      return error.response.data;
    }
  };

export const getDemandByCurrIdAndDate =
  (curriculumId: number, startDate: string, endDate: string) =>
  async (dispatch: Dispatch<IAppAction>) => {
    try {
      return await axios.get(
        `demand/curriculum/${curriculumId}/${startDate}/${endDate}`
      );
    } catch (error) {
      return error.response.data;
    }
  };

export const getDemandByClientId = async (clientId: number) => {
  try {
    const res = await axios.get(`demand/client/${clientId}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
