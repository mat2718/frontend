import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import ITrainer from "../../entities/Trainer";
import { AppActions, IAppAction } from "./actions";
import { IAppState } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { AxiosResponse } from "axios";

/**
 * Trainer Handler - Axios Requests to the Database regarding the Trainer
 * @param {ITrainer || IAppAction} interface - list properties of a trainer and for an expected payloaad
 * @returns {success || err} - a message confirming the response of the action
 * @author Joab Smith and Imran Ilyas
 */

//Handler for adding a trainer to the database
export const addTrainer = (trainer: ITrainer) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    await axios.post("trainer", trainer);
    (() => {
      const dispatcher = useDispatch();
      dispatcher(getAllTrainers());
    })();
    return `${trainer.trainerfirst} ${trainer.trainerlast} has been added`;
  } catch (err) {
    return "Error when attempting to add a trainer: " + err;
  }
};

//Handler for deleting a trainer from the database
export const deleteTrainer = (trainer: ITrainer) => async () => {
  try {
    await axios.delete(`trainer/id/${trainer.trainerid}`);
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
export const getAllTrainers = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    await axios.get("trainer").then((response) => {
      const trainers: ITrainer[] = response.data;
      console.log("resp", response.data, trainers);
      dispatch({
        type: AppActions.UPDATE_TRAINER,
        payload: {
          skills: [],
          clients: [],
          batches: [],
          curricula: [],
          demands: [],
          trainers,
        },
      });
      return "Retrieved all Trainers";
    });
  } catch (err) {
    return "Error attempting to retrieve all trainers: " + err;
  }
};

//Handler for updating a trainer's information
export const updateTrainer = (trainer: ITrainer) => async () => {
  try {
    await axios.put("trainer", { ...trainer, curriculaIdArr: [] });
    (() => {
      const dispatcher = useDispatch();
      dispatcher(getAllTrainers());
    })();
  } catch (err) {
    return (
      `Unable to update ${trainer.trainerfirst} ${trainer.trainerlast}'s information: ` +
      err
    );
  }
};

// Handler for getting a trainer by their first name
export const getTrainerFName = (trainerName: string) => async () => {
  try {
    const response: AxiosResponse = await axios.get(
      `trainer/firstname/${trainerName}`
    );
    return response.data;
  } catch (err) {
    return "Unable to retrieve the first name of a trainer: " + err;
  }
};

// Handler for getting a trainer by their last name
export const getTrainerLName = (trainerName: string) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    const response: AxiosResponse = await axios.get(
      `trainer/lastname/${trainerName}`
    );
    return response.data;
  } catch (err) {
    return "Unable to retrieve the last name of a trainer: " + err;
  }
};

// Handler for getting a trainer by their ID number
export const getTrainerId = (trainerId: number) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    const response: AxiosResponse = await axios.get(`trainer/id/${trainerId}`);
    return response.data;
  } catch (err) {
    return "Unable to retrieve trainer by ID: " + err;
  }
};
