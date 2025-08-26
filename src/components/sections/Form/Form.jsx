import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";

export default function Form({ data, onUpdate }) {
  return (
    <div id="cv-form">
      <PersonalSection data={data} updateData={onUpdate} />
      <EducationSection data={data} updateData={onUpdate} />
      <WorkSection data={data} updateData={onUpdate} />
    </div>
  );
}
