import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import LinkBox from "../components/LinkBox";
import styles from "../styles/Home.module.css";
import DataBase from "../data/database.json";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Welcome to similarfont.io</h1>
        <div className="container">
          <div className="row">
            {DataBase.map((font, index) => {
              return (
                <LinkBox
                  link={`/google-alternative-font-to-${font.fontName}`}
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
