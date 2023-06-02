import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "http://localhost:5000/todos";

//Get All todos
export const useGetAllTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
};

//Create a todo
export const createTodo = async (label) => {
  await axios.post(URL, { label });
};

//Update a todo with ID
export const updateTodo = async (id, important) => {
  await axios.put(`${URL}/${id}`, { important });
};

//Delete a todo with ID
export const deleteTodo = async (id) => {
  await axios.delete(`${URL}/${id}`);
};
