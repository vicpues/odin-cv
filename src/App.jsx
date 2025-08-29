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
      <main>
        <Form data={formData} updateFn={updateFn} />
        <Output data={formData} />
      </main>
    </>
  );
}
