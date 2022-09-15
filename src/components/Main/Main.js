import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import { zodiacSigns } from '../../data';
import background from '../../background.jpeg';

export default function Main() {
  return (
    <main className="zodiac-list" style={{ backgroundImage: `url(${background})` }}>
      {/* When we import the background, it must be in the src file and we don't need to write
      any of the path after the url because the import brings the entire path.  */}
      {zodiacSigns.map((sign) => (
        <ZodiacCard key={sign.id} {...sign} />
      ))}
    </main>
  );
}
