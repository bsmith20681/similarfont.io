import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
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
        {DataBase.map((font, index) => {
          return (
            <h1>
              <Link href={`/google-alternative-font-to-${font.fontName}`}>
                {font.fontName}
              </Link>
            </h1>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
