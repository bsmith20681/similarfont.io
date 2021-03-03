import { NextSeo } from "next-seo";
import Message from "../components/Message";
import Layout from "../components/Layout";
import LinkBox from "../components/LinkBox";
import SearchBar from "../components/SearchBar";
import DataBase from "../data/database.json";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const fontArray = DataBase.filter(
    (x) => x.googleFont === false && x.fontSquirrel === false
  );

  const filteredFontArray = fontArray.filter((x) => {
    return x.fontName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Layout>
      <NextSeo
        title="Home | similarfont.io"
        description="This is the homepage"
      />

      {console.log(filteredFontArray)}
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <h1 className="hero-title">
              Easily Find <span style={{ color: "#7069fa" }}>Free</span>{" "}
              Alternatives to Premium Fonts
            </h1>
            <p className="hero-subtitle">Find up to 50+ alternative fonts</p>
          </div>
        </div>
      </div>

      <div className="linkBox-content">
        <SearchBar value={search} change={(e) => setSearch(e.target.value)} />

        <div className="container" style={{ minHeight: "50%" }}>
          <div
            className="row justify-content-center"
            style={{ marginBottom: "48px" }}
          ></div>
          <div className="row">
            {}
            {filteredFontArray.length === 0 ? (
              <Message />
            ) : (
              filteredFontArray.map((font, index) => {
                return (
                  <LinkBox
                    link={`/${font.fontName}/google-alternative-font-to-${font.fontName}`}
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
