import axios from "axios";

const url = "${BASE_API_URL}";

export const fetchAllCourses = () => axios.get(url);
export const createCourse = (newCourse) => axios.post(url, newCourse);
export const updateCourse = (id, updatedCourse) =>
  axios.patch(`${url}/${id}`, updatedCourse);
export const deleteCourse = (id) => axios.delete(`${url}/${id}`);
// export const updateLike = (id) => axios.patch(`${url}/${id}/likeCourse`)
