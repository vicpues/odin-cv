export default function Paragraphs({ string }) {
  const lines = string.split("\n");
  return (
    <>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  );
}
