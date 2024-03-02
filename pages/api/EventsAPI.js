import { BASE_API_URL } from "../../config/constants";
import axios from "axios";

const url = `${BASE_API_URL}/Events`;

export const fetchAllEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);
export const updateEvent = (id, updatedEvent) =>
  axios.patch(`${url}/${id}`, updatedEvent);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);
// export const updateLike = (id) => axios.patch(`${url}/${id}/likeEvent`)
