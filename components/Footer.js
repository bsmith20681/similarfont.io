import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-line"></div>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <p>© {year}. All rights reserved.</p>
          <div>
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/terms">
              <a style={{ marginLeft: "10px" }}>Terms and Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
