import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import IDemand from "../../entities/Demand";
import { AppActions, IAppAction } from "./actions";
import { IAppState } from "../state";
import { useSelector } from "react-redux";

export const getAllDemand = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    await axios.get('demand').then((response) => {
      const demands = response.data;

      dispatch({
        type: AppActions.UPDATE_DEMAND,
        payload:{
          skills: [],
          clients: [],
          batches: [],
          cirricula: [],
          demands,
          trainers: [],
        }
      });
      return "Retrieved all Client Demands"
    });
  } catch(error){
    return error.response.data;
  }
};

export const addDemand = (demand: IDemand) => async (dispatch: Dispatch<IAppAction>) => {
  const demands: IDemand[] = useSelector((state:IAppState) => { return state.demands })
  try {
    await axios.post('demand', demand);
    demands.push(demand);
    dispatch({
      type: AppActions.UPDATE_TRAINER,
      payload: {
        skills: [],
        clients: [],
        batches: [],
        cirricula: [],
        demands,
        trainers: []
      },
    });
    return `${demand.clientId}'s demand has been added`;
  } catch (error) {
    return error.response.data;
  }
};

export const getDemandById = (demandId: number) => async (dispatch: Dispatch<IAppAction>) => {
  try {
    return await axios.get(`demand/id/${demandId}`);
  } catch (error) {
    return error.response.data;
  };
};

export const getDemandByDate = (startDate: string, endDate: string) => async (dispatch: Dispatch<IAppAction>) => {
  try {
    return await axios.get(`demand/date/${startDate}/${endDate}`)
  } catch(error){
    return error.response.data;
  };
};

export const getDemandByCurrId = (curriculumId: number) => async(dispatch: Dispatch<IAppAction>) => {
  try {
    return await axios.get(`demand/curriculum/${curriculumId}`)
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByCurrIdAndDate = (curriculumId: number, startDate:string, endDate:string) => async(dispatch: Dispatch<IAppAction>) => {
  try {
    return await axios.get(`demand/curriculum/${curriculumId}/${startDate}/${endDate}`)
  } catch(error){
    return error.response.data;
  }
}

export const getDemandByClientId = (clientId: number) => async (dispatch: Dispatch<IAppAction>) => {
  try {
    return await axios.get(`demand/client/${clientId}`)
  } catch(error){
    return error.response.data;
  }
}






