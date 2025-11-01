function Table({ tableData, handleEdit, handleDelete }) {
    return (
        <table className="p-6 mx-auto max-w-4xl w-full border mt-6 border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Task Title</th>
                    <th className="border p-2">Task Description</th>

                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center p-4 text-gray-500">
                            No tasks available
                        </td>
                    </tr>
                ) : (
                    tableData.map((task, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{task.title}</td>
                            <td className="border px-4 py-2">{task.description}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                    onClick={() => handleEdit(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default Table;
