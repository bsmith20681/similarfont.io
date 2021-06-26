import { NextSeo } from "next-seo";
import Message from "../components/Message";
import Layout from "../components/Layout";
import LinkBox from "../components/LinkBox";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import groq from "groq";
import client from "../client";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const { posts = [] } = props;

  const filteredPosts = posts.filter((x) => {
    return x.fontName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Layout>
      <NextSeo
        title="Home | SimilarFont.io"
        description="Easily find free font alternatives to 50+ premium fonts."
      />
      {console.log(posts)}

      <div className="container">
        <div className="row justify-content-center">
          <div>
            <h1 className="hero-title">
              Easily Find <span style={{ color: "#7069fa" }}>Free</span>{" "}
              Alternatives to Premium Fonts
            </h1>
            <p className="hero-subtitle">
              Easily find free font alternatives to 50+ premium fonts.
            </p>
          </div>
        </div>
      </div>

      <div className="linkBox-content">
        <SearchBar value={search} change={(e) => setSearch(e.target.value)} />
        <div className="container" style={{ minHeight: "83vh" }}>
          <div
            className="row justify-content-center"
            style={{ marginBottom: "48px" }}
          ></div>
          <div className="row">
            {filteredPosts.length === 0 ? (
              <Message message="😨Can't find the font you are looking for? Send it to us and we will put in our database later." />
            ) : (
              filteredPosts.map((font, index) => (
                <LinkBox
                  key={index}
                  link={font.slug.current}
                  font={font.fontName}
                  number={font.title}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post"]|order(publishedAt desc)
  `),
});

export default Home;
