import AddTodos from "./components/AddTodos";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-5">
      <div className="py-7 px-3 w-full flex flex-col justify-center items-center border rounded-md shadow-md">
        <h1 className="text-3xl font-bold pb-5 text-rose-500">
          Todos - Docker
        </h1>
        <AddTodos />
      </div>
    </div>
  );
}

export default App;
