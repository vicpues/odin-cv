import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import Output from "./components/Output/Output";
import NavBar from "./components/NavBar/NavBar";
import Editor from "./components/Editor/Editor";
import { data } from "./form-data";

export default function App() {
  const [formData, setFormData] = useState(data);

  function updateFn(newData) {
    setFormData(newData);
  }

  return (
    <>
      <NavBar />
      <Editor>
        <Form data={formData} updateFn={updateFn} />
        <Output data={formData} />
      </Editor>
    </>
  );
}
