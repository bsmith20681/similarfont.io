const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          Copyright {year}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
