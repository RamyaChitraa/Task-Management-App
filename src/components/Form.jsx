function Form({ formData, handleFormDataChange, handleSubmit, editIndex }) {
  return (
    <div>

      <h2 className="text-2xl font-semibold mb-4 p-6">TASK MANAGEMENT APP</h2>

      <div className="p-6">
        <form
          className="border rounded-lg p-4 bg-white shadow"
          onSubmit={handleSubmit}
        >
          {/* Task Title */}
          <input
            className="w-full p-2 border rounded mb-2"
            type="text"
            placeholder="Enter Task Title..."
            onChange={(e) => handleFormDataChange("title", e.target.value)}
            required
            value={formData.title}
          />

          {/* Task Description */}
          <textarea
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter Task Description..."
            rows={4}
            onChange={(e) => handleFormDataChange("description", e.target.value)}
            required
            value={formData.description}
          ></textarea>

          {/* Submit Button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            {editIndex == null ? "Add Task" : "Edit Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
