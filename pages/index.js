import { NextSeo } from "next-seo";
import Message from "../components/Message";
import Layout from "../components/Layout";
import LinkBox from "../components/LinkBox";
import SearchBar from "../components/SearchBar";
import DataBase from "../data/database.json";
import { useState } from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const fontArray = DataBase.filter(
    (x) => x.googleFont === false && x.fontSquirrel === false
  );
  return {
    props: { fonts: fontArray },
  };
};

const Home = ({ fonts }) => {
  const [search, setSearch] = useState("");

  const filteredFontArray = fonts.filter((x) => {
    return x.fontName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Layout>
      <NextSeo
        title="Home | SimilarFont.io"
        description="Easily find free font alternatives to 50+ premium fonts."
      />

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
            {}
            {filteredFontArray.length === 0 ? (
              <Message message="😨Can't find the font you are looking for? Send it to us and we will put in our database later." />
            ) : (
              filteredFontArray.map((font, index) => {
                return (
                  <LinkBox
                    key={index}
                    link={`/${font.fontName.toLowerCase()}/google-font-alternative-to-${
                      font.fontName
                    }`}
                    font={font.fontName}
                    number={
                      font.googleAlternatives.length +
                      font.fontSquirrelAlternatives.length
                    }
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
