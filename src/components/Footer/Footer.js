import './Footer.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function Footer() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <footer>
      <span className="footer-text">
        *all above information is considered Tropical astrology and not endorsed by those who
        practice sidereel.
      </span>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </footer>
  );
}
