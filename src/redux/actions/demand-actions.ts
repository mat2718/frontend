import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import { AppActions, IAppAction } from "./actions";

/**
 * Gets All Demands 
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @return {err} - returns string, whether it is an error message or a successful response message
 * @author Oriel Red Oral
 */
export const getAllDemand = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    const res = await axios.get("demand");
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
    return "Retrieved all Client Demands";
  } catch (error) {
    return error.response.data;
  }
};

/**
 * POST method, Adds a Demand
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @return {err} - returns string, whether it is an error message or a successful response message
 * @author Oriel Red Oral
 */
export const addDemand = (demand: {}) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    await axios.post("demand", demand);
    const res = await axios.get("demand");
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

    return "Demand has been added";
  } catch (error) {
    return error;
  }
};

/**
 * Get Demand by using a start and end date 
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @return {AxiosResponse} - response message
 * @author Oriel Red Oral
 */

export const getDemandByDate = async (startDate: string, endDate: string) => {
  try {
    const res = await axios.get(`demand/date/${startDate}/${endDate}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

/**
 * Get Demand by Curriculum ID and Date 
 * @param {dispatch} Dispatch - dispatch function that accepts async actions
 * @return {AxiosResponse} - response message
 * @author Oriel Red Oral
 */
export const getDemandByCurrIdAndDate = async (
  curriculumId: number,
  startDate: string,
  endDate: string
) => {
  try {
    const res = await axios.get(
      `demand/curriculum/${curriculumId}/${startDate}/${endDate}`
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
