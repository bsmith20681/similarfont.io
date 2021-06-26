import Link from "next/link";
const shortid = require("shortid");

const LinkBox = (props) => {
  return (
    <div key={props.id} className="col-md-4" style={{ marginBottom: "20px" }}>
      <Link href={props.link}>
        <div className="linkBox">
          <h2 className="linkBox-title">{props.font}</h2>
          <p>{props.number}</p>
          <Link href={props.link}>See Alternatives</Link>
        </div>
      </Link>
    </div>
  );
};

export default LinkBox;
