import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";

export default function Form({ data }) {
  return (
    <div id="cv-form">
      <PersonalSection data={data} />
      <EducationSection data={data} />
      <WorkSection data={data} />
    </div>
  );
}
