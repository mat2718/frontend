import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import { AppActions, IAppAction } from "./actions";

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

export const getDemandByDate = async (startDate: string, endDate: string) => {
  try {
    const res = await axios.get(`demand/date/${startDate}/${endDate}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

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
