import Head from "next/head";
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
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {console.log(filteredFontArray)}

        <h1>Welcome to similarfont.io</h1>
        <div className="container">
          <SearchBar value={search} change={(e) => setSearch(e.target.value)} />
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
