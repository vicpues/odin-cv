import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import Output from "./components/Output/Output";
import { data } from "./form-data";

export default function App() {
  const [formData, setFormData] = useState(data);

  function updateFn(newData) {
    setFormData(newData);
  }

  return (
    <>
      <Form data={formData} updateFn={updateFn} />
      <hr style={{ margin: "2rem 0" }} />
      <Output data={formData} />
    </>
  );
}
