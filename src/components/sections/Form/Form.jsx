import PersonalSection from "./PersonalSection/PersonalSection";
import EducationSection from "./EducationSection/EducationSection";

export default function Form() {
  return (
    <form id="cv-form" action="">
      <PersonalSection />
      <EducationSection />
    </form>
  );
}
