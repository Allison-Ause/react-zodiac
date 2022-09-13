import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <span className="title">Explore the Zodiac!</span>
      <img src={`${process.env.PUBLIC_URL}/header-cat.png`} />
    </div>
  );
}
