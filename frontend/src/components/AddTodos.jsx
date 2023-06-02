function AddTodos() {
  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        alert("You Submit the form");
      }}
    >
      <input
        className="w-full py-3 px-5 shadow-sm rounded-md border border-slate-300 bg-transparent placeholder:text-lg placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        type="text"
        placeholder="Add Todos..."
      />
    </form>
  );
}

export default AddTodos;
