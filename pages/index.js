import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "../components/Layout";
import LinkBox from "../components/LinkBox";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";
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
      <div>
        {console.log(filteredFontArray)}
        <div className="container">
          <div className="row justify-content-center">
            <h1>Welcome to similarfont.io</h1>
          </div>
        </div>

        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginBottom: "48px" }}
          >
            <SearchBar
              value={search}
              change={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="row">
            {filteredFontArray.map((font, index) => {
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
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
