import axios from "axios";

export const fetchPerson = async (id) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
    return { status: "success", response: data };
  } catch (error) {
    return { status: "failure", response: error };
  }
};