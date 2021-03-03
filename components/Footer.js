const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-line"></div>
        <div className="row">© {year}. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
