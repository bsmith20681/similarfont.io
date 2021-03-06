import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import DataBase from "../../data/database.json";
import { NextSeo } from "next-seo";
import AuthorBox from "../../components/AuthorBox";

export async function getStaticPaths() {
  const data = DataBase;
  const fontArray = data.filter(
    (x) => x.googleFont === false && x.fontSquirrel === false
  );

  const paths = fontArray.map((font) => ({
    params: {
      fonts: font.fontName.toLowerCase(),
      font: "google-font-alternative-to-" + font.fontName,
    },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const grabFontFromURL = `${params}`.split("-").pop();
  const filteredFonts = DataBase.filter((x) => x.fontName == grabFontFromURL);

  return {
    props: { singleFont: filteredFonts },
  };
};

const ViewFont = ({ singleFont }) => {
  const router = useRouter();
  const { font } = router.query;
  const grabFontFromURL = `${font}`.split("-").pop();
  const filteredFonts = DataBase.filter((x) => x.fontName == grabFontFromURL);
  const title = `Google Font Alternative for ${filteredFonts[0].fontName}`;
  const description = `Here are ${filteredFonts[0].googleAlternatives.length} Google Font alternatives for ${filteredFonts[0].fontName} that are similar in nature. These fonts are free to use and would make a good replacement for a premium font.`;

  return (
    <Layout>
      <NextSeo title={title} description={description} />
      <article>
        <div className="title-background">
          {filteredFonts.map((x) => {
            return (
              <h1 className="title">
                {x.googleAlternatives.length} Google Font Alternatives to{" "}
                {x.fontName}
              </h1>
            );
          })}
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-8">
            <div className="row">
              {filteredFonts.map((x, i) => {
                return (
                  <div key={i}>
                    <h2>{ReactHtmlParser(x.description)}</h2>
                    <h2>Similar Google Fonts for {x.fontName}</h2>
                    {x.googleAlternatives.map((font) => {
                      const googleAltFont = DataBase.find(
                        (item) => item.fontName === font
                      );

                      return (
                        <ul className="post-item_list">
                          <li className="post-item">
                            <img src={x.fontImage} alt={x.fontImageAlt} />
                            <img
                              src={googleAltFont.fontImage}
                              alt={googleAltFont.fontImageAlt}
                            />
                            <a href={googleAltFont.fontLink}>
                              <strong>{googleAltFont.fontName}</strong>
                            </a>
                            <p>{ReactHtmlParser(googleAltFont.description)}</p>
                          </li>
                        </ul>
                      );
                    })}
                    <h2>Similar Font Squirel fonts for {x.fontName}</h2>
                    {x.fontSquirrelAlternatives.map((font) => {
                      const fontSquirrelAltFont = DataBase.find(
                        (item) => item.fontName === font
                      );
                      return (
                        <ul className="post-item_list">
                          <li className="post-item">
                            <img src={x.fontImage} alt={x.fontImageAlt} />
                            <img
                              src={fontSquirrelAltFont.fontImage}
                              alt={fontSquirrelAltFont.fontImageAlt}
                            />
                            <a>
                              <strong>{fontSquirrelAltFont.fontName}</strong>
                            </a>
                            <p>
                              {ReactHtmlParser(fontSquirrelAltFont.description)}
                            </p>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
      <AuthorBox />
      <div style={{ marginTop: "20px", opacity: "0" }}>tes</div>
    </Layout>
  );
};

export default ViewFont;
