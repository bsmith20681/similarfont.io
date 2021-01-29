import Link from "next/link";

const Header = (props) => {
  return (
    <div className="container">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <Link href="/">similarfont.io</Link>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
