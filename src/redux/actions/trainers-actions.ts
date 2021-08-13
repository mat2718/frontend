import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import ITrainer from "../../entities/Trainer";
import { AppActions, IAppAction } from "./actions";
import { IAppState } from "../state";
import { useSelector } from "react-redux";

export const addTrainer = (trainer: ITrainer) => async (
  dispatch: Dispatch<IAppAction>
) => {
  const trainers: ITrainer[] = useSelector((state: IAppState) => {
    return state.trainers;
  });
  try {
    await axios.post("trainer", trainer);
    trainers.push(trainer);
    dispatch({
      type: AppActions.UPDATE_TRAINER,
      payload: {
        skills: [],
        clients: [],
        batches: [],
        cirricula: [],
        demands: [],
        trainers,
      },
    });
    return `${trainer.trainerfirst} ${trainer.trainerlast} has been added`;
  } catch (err) {
    return "Error when attempting to add a trainer: " + err;
  }
};

export const deleteTrainer = (trainer: ITrainer) => async () => {
  try {
    await axios.delete(`trainer/id/${trainer.trainerId}`);
    getAllTrainers();
    return "Trainer deleted";
  } catch (err) {}
};

export const getAllTrainers = () => async (dispatch: Dispatch<IAppAction>) => {
  try {
    await axios.get("trainer").then((response) => {
      const trainers = response.data;
      dispatch({
        type: AppActions.UPDATE_TRAINER,
        payload: {
          skills: [],
          clients: [],
          batches: [],
          cirricula: [],
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

export const updateTrainer = (trainer: ITrainer) => async () => {
  try {
    await axios.put("trainer", { ...trainer, curriculaIdArr: [] });
    getAllTrainers();
  } catch (err) {
    return (
      `Unable to update ${trainer.trainerfirst} ${trainer.trainerlast}'s information: ` +
      err
    );
  }
};

export const getTrainerFName = (trainerName: string) => async () => {
  try {
    return await axios.get(`trainer/firstname/${trainerName}`);
  } catch (err) {
    return "Unable to retrieve the first name of a trainer: " + err;
  }
};

export const getTrainerLName = (trainerName: string) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    return await axios.get(`trainer/lastname/${trainerName}`);
  } catch (err) {
    return "Unable to retrieve the last name of a trainer: " + err;
  }
};

export const getTrainerId = (trainerId: number) => async (
  dispatch: Dispatch<IAppAction>
) => {
  try {
    return await axios.get(`trainer/id/${trainerId}`);
  } catch (err) {
    return "Unable to retrieve trainer by ID: " + err;
  }
};
