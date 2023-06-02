function TodoDetail({ data }) {
  return (
    <div
      className={`w-full px-3 py-5 flex justify-between items-center rounded-md border border-slate-300 ${
        data.important && "border-l-4 border-l-blue-500"
      }`}
    >
      <h3>{data.label}</h3>
      <button>Delete</button>
    </div>
  );
}

TodoDetail.propTypes = {
  data: {
    id: Number,
    label: String,
    important: Boolean,
  },
};

export default TodoDetail;
