import "./App.css";
import { useState } from "react";
import Form from "./components/sections/Form/Form";
import { data } from "./form-data";

export default function App() {
  const [formData, setFormData] = useState(data);

  function updateFn(newData) {
    setFormData(newData);
  }

  return (
    <>
      <Form data={formData} updateFn={updateFn} />
    </>
  );
}
