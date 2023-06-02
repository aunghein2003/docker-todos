import AddTodos from "./components/AddTodos";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="py-7 px-3 w-full flex flex-col justify-center items-center border rounded-md shadow-md">
        <h1 className="text-4xl font-bold pb-5 text-blue-500">
          Todos - Docker
        </h1>
        <AddTodos />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
