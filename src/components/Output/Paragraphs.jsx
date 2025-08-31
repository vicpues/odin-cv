export default function Paragraphs({ string }) {
  const lines = string.split("\n");
  return (
    <>
      {lines.map((line, index) => (
        <p key={index} className="output-para">
          {line}
        </p>
      ))}
    </>
  );
}
