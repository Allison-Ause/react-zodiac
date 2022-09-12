export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${name}`} />
      <span className="name">{name}</span>
      <span className="dates">{dates}</span>
    </div>
  );
}
