import Layout from "../components/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <h1>
              About Similar<span style={{ color: "#7069fa" }}>Font</span>.io
            </h1>
            <p>
              SimilarFont.io is on a mission to find free font alternatives that
              look close to paid fonts.
            </p>
            <p>
              We understand what it is like to have a picky client on a tight
              budget.
            </p>
            <p>
              It's our goal to fill this website with different options that a
              make life easier for any designer out there.
            </p>
            <p>
              We are always looking to expand our catalog, so if you have a
              suggestion you can submit it{" "}
              <Link href="/submit-font">
                <a className="about-link">here</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
