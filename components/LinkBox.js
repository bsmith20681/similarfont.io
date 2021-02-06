import Link from "next/link";

const LinkBox = (props) => {
  return (
    <div className="col-md-4" style={{ marginBottom: "20px" }}>
      <Link href={props.link}>
        <a>
          {" "}
          <div className="LinkBox">
            <h2>{props.font}</h2>
            <p>
              {props.number} free fonts similar to {props.font}
            </p>
            <p>See Alternatives</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LinkBox;
