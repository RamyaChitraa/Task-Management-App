import { useState } from "react";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIdx, setEditIdx] = useState(null);

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIdx !== null) {
      setData(data.map((item, i) => (i === editIdx ? form : item)));
      setEditIdx(null);
    } else {
      setData([...data, form]);
    }
    setForm({ name: "", email: "" });
  };

  const handleEdit = (i) => {
    setForm(data[i]);
    setEditIdx(i);
  };

  const handleDelete = (i) => setData(data.filter((_, idx) => idx !== i));

  return (
    <div>
      <Form
        formData={form}
        handleFormDataChange={handleChange}
        handleSubmit={handleSubmit}
        editIndex={editIdx}
      />
      <Table tableData={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}
