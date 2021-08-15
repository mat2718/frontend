import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import IDemand from "../../entities/Demand";
import { AppActions, IAppAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";

export const getAllDemand = () => async(dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get('demand')
    dispatch({
        type: AppActions.UPDATE_DEMAND,
        payload: res.data
    });
    return "Retrieved all Client Demands"
  } catch(error){
    return error.response.data;
  }
};

export const addDemand = (demand: IDemand) => async() => {
  try {
    await axios.post('demand', demand);
    (() => {
      const dispatcher = useDispatch()
      dispatcher(getAllDemand());
    })();
    return `${demand.clientId}'s demand has been added`;
  } catch (error) {
    return error.response.data;
  }
};

export const getDemandById = async (demandId: number) => {
  try {
    const res = await axios.get(`demand/id/${demandId}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getDemandByDate = async(startDate: string, endDate: string) => {
  try {
    const res = await axios.get(`demand/date/${startDate}/${endDate}`)
    return res.data;
  } catch (error){
    return error.response.data;
  }
};

export const getDemandByCurrId = async(curriculumId: number) => {
  try {
    const res = await axios.get(`demand/curriculum/${curriculumId}`);
    return res.data;
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByCurrIdAndDate = async(curriculumId: number, startDate:string, endDate:string) => {
  try {
    const res = await axios.get(`demand/curriculum/${curriculumId}/${startDate}/${endDate}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};

export const getDemandByClientId = async (clientId: number) => {
  try {
    const res = await axios.get(`demand/client/${clientId}`)
    return res.data;
  } catch(error){
    return error.response.data;
  }
};






