import Link from "next/link";
const shortid = require("shortid");

const LinkBox = (props) => {
  return (
    <div
      className="col-md-4"
      style={{ marginBottom: "20px" }}
      key={shortid.generate()}
    >
      <Link href={props.link} key={shortid.generate()}>
        <a key={shortid.generate()}>
          {" "}
          <div className="LinkBox" key={shortid.generate()}>
            <h2 key={shortid.generate()}>{props.font}</h2>
            <p key={shortid.generate()}>
              {props.number} free fonts similar to {props.font}
            </p>
            <a href="#" key={shortid.generate()}>
              See Alternatives
            </a>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LinkBox;
