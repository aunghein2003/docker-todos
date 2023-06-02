import { useGetAllTodos } from "../utils/helper";
import TodoDetail from "./TodoDetail";

// const todos = [
//   {
//     id: 1,
//     label: "Learn React",
//     important: false,
//   },
//   {
//     id: 2,
//     label: "Learn Docker",
//     important: true,
//   },
//   {
//     id: 3,
//     label: "Have meeting",
//     important: true,
//   },
//   {
//     id: 4,
//     label: "Learn React",
//     important: false,
//   },
//   {
//     id: 5,
//     label: "Learn Docker",
//     important: true,
//   },
//   {
//     id: 6,
//     label: "Have meeting",
//     important: true,
//   },
// ];

function TodosList() {
  const { data, isLoading, error } = useGetAllTodos();

  if (error)
    return (
      <h3 className="mt-3 text-2xl font-medium text-slate-400">
        {error.message}
      </h3>
    );

  if (isLoading)
    return (
      <h3 className="mt-3 text-2xl font-medium text-slate-400">Loading...</h3>
    );

  return (
    <div className="todoList w-full h-auto max-h-[50vh] overflow-y-auto mt-3 pr-1 flex flex-col gap-y-3">
      {data.map((todo) => (
        <TodoDetail key={todo.id} data={todo} />
      ))}
    </div>
  );
}

export default TodosList;
