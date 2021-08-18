import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import ITrainer from "../../entities/Trainer";
import { AppActions } from "./actions";
import { useDispatch } from "react-redux";
import { AxiosResponse } from "axios";

/**
 * Trainer Handler - Axios Requests to the Database regarding the Trainer
 * @param {ITrainer || IAppAction} interface - list properties of a trainer and for an expected payload
 * @returns {success || err} - a message confirming the response of the action
 * @author Joab Smith and Imran Ilyas and Oriel Red Oral
 */

//Handler for adding a trainer to the database
export const addTrainer = (trainer: ITrainer) => async (dispatch: Dispatch) => {
  try {
    await axios.post("trainer", trainer);
    const trainers: AxiosResponse = await axios.get("trainer");

    //console.log("resp", trainers);
    dispatch({
      type: AppActions.UPDATE_TRAINER,
      payload: { trainers: trainers.data },
    });

    return `${trainer.trainerfirst} ${trainer.trainerlast} has been added`;
  } catch (err) {
    return "Error when attempting to add a trainer: " + err;
  }
};

//Handler for deleting a trainer from the database
export const deleteATrainer = (trainer: number) => async () => {
  try {
    await axios.delete(`trainer/id/${trainer}`);
    (() => {
      const dispatcher = useDispatch();
      dispatcher(getAllTrainers());
    })();
    return "Trainer deleted";
  } catch (err) {
    return "Unable to delete the trainer: " + err;
  }
};

//Handler for retrieving all trainers from the database
export const getAllTrainers = () => async (dispatch: Dispatch) => {
  try {
    await axios.get("trainer").then((response) => {
      const trainers: ITrainer[] = response.data;
      console.log("resp", response.data, trainers);
      dispatch({
        type: AppActions.UPDATE_TRAINER,
        payload: { trainers },
      });
      return "Retrieved all Trainers";
    });
  } catch (err) {
    return "Error attempting to retrieve all trainers: " + err;
  }
};

//Handler for updating a trainer's information
export const updateTrainer = (trainer: ITrainer) => async (dispatch: any) => {
  try {
    await axios.put("trainer", { ...trainer, curriculaIdArr: [] });

    dispatch(getAllTrainers());
  } catch (err) {
    return (
      `Unable to update ${trainer.trainerfirst} ${trainer.trainerlast}'s information: ` +
      err
    );
  }
};
