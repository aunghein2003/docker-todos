import { useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "../utils/helper";
import { MdDelete } from "react-icons/md";

function TodoDetail({ data }) {
  const queryClient = useQueryClient();

  return (
    <div
      className={`w-full px-3 py-5 flex justify-between items-center cursor-pointer rounded-md border border-slate-300 ${
        data.important && "border-l-4 border-l-blue-500"
      }`}
      onClick={() => {
        updateTodo(data._id, !data.important);
        queryClient.invalidateQueries("todos");
      }}
    >
      <h3>{data.label}</h3>
      <button
        className="px-3 py-2 rounded-md text-lg text-slate-50 bg-red-500 hover:bg-red-600 active:bg-red-700"
        onClick={() => {
          deleteTodo(data._id);
          queryClient.invalidateQueries("todos");
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
}

TodoDetail.propTypes = {
  data: {
    _id: String,
    label: String,
    important: Boolean,
  },
};

export default TodoDetail;
