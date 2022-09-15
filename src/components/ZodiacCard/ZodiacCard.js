import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className="zodiac-card">
      <img src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`} /> 
      {/* This img src needs the entire path because we are not importing it. */}
      <span className="name">{name[0].toUpperCase() + name.slice(1)}</span>
      <span className="dates">{dates}</span>
    </div>
  );
}
