import getDateString from "./getDateString";
import Paragraphs from "./Paragraphs";
import "./Output.css";

export default function Output({ data }) {
  const personal = data.personalData[0];
  const education = data.educationData;
  const work = data.workData;

  return (
    <div id="output-column">
      <output id="output-container">
        <div className="output-page">
          <div>
            <div>{personal.name}</div>
            <span>{personal.email}</span> <span>{personal.phone}</span>{" "}
            <span>{personal.location}</span>
            <div>
              <Paragraphs string={personal.about} />
            </div>
          </div>
          {education.length > 0 && (
            <>
              <hr />
              <div>
                <div>Education</div>
                {education.map((group) => (
                  <div key={group.uniqueId}>
                    <div>{group.degree}</div>
                    <span>{group.school}</span>{" "}
                    <span>{getDateString(group.from, group.to)}</span>
                    <div>
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {work.length > 0 && (
            <>
              <hr />
              <div>
                <div>Work experience</div>
                {work.map((group) => (
                  <div key={group.uniqueId}>
                    <div>{group.company}</div>
                    <span>{group.position}</span>{" "}
                    <span>{getDateString(group.from, group.to)}</span>
                    <div>
                      <Paragraphs string={group.details} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </output>
    </div>
  );
}
