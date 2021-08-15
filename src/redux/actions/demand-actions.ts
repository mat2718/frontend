<<<<<<< HEAD
import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import IDemand from "../../entities/Demand";
import { AppActions, IAppAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";

export const getAllDemand = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get('demand')
    dispatch({
        type: AppActions.UPDATE_DEMAND,
        payload: res.data
    });
    return "Retrieved all Client Demands"
  } catch(error){
=======
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
        curricula: [],
        demands: res.data,
        trainers: [],
      },
    });
    return 'Retrieved all Client Demands';
  } catch (error) {
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3
    return error.response.data;
  }
};

<<<<<<< HEAD
export const addDemand = (demand: IDemand) => async () => {
=======
export const addDemand = (demand: {}) => async (dispatch: Dispatch) => {
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3
  try {
    console.log(demand);
    await axios.post('demand', demand);
<<<<<<< HEAD
    (() => {
      const dispatcher = useDispatch()
      dispatcher(getAllDemand());
    })();
    return `${demand.clientId}'s demand has been added`;
=======
    const res = await axios.get('demand');
    dispatch({
      type: AppActions.UPDATE_DEMAND,
      payload: {
        type: AppActions.UPDATE_DEMAND,
        payload: { demands: res.data },
      },
    });

    return 'Demand has been added';
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
export const getDemandById = (demandId: number) => async (dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get(`demand/id/${demandId}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getDemandByDate = (startDate: string, endDate: string) => async() => {
  try {
    const res = await axios.get(`demand/date/${startDate}/${endDate}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByCurrId = (curriculumId: number) => async(dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get(`demand/curriculum/${curriculumId}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByCurrIdAndDate = (curriculumId: number, startDate:string, endDate:string) => async() => {
  try {
    const res = await axios.get(`demand/curriculum/${curriculumId}/${startDate}/${endDate}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByClientId = (clientId: number) => async () => {
  try {
    const res = await axios.get(`demand/client/${clientId}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};






=======
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
>>>>>>> 35e63a36562ee15337adb94d16173196063b75e3
