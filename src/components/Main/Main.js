import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiacSigns } from '../../data';
import background from '../../background.jpeg';

export default function Main() {
  return (
    <main className="zodiac-list" style={{ backgroundImage: `url(${background})` }}>
      {zodiacSigns.map((sign) => (
        <ZodiacCard key={sign.id} {...sign} />
      ))}
    </main>
  );
}
