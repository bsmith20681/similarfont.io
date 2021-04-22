import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import DataBase from "../../data/database.json";
import { NextSeo } from "next-seo";
import AuthorBox from "../../components/AuthorBox";
import React from "react";

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
                  <React.Fragment key={i}>
                    {ReactHtmlParser(x.description)}
                    <h2>Similar Google Fonts for {x.fontName}</h2>
                    {x.googleAlternatives.map((font) => {
                      const googleAltFont = DataBase.find(
                        (item) => item.fontName === font
                      );

                      return (
                        <ul className="post-item_list">
                          <li className="post-item">
                            <img
                              className="img-fluid"
                              src={x.fontImageSentence}
                              alt={x.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={googleAltFont.fontImageSentence}
                              alt={googleAltFont.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={x.fontImageAlphabet}
                              alt={x.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={googleAltFont.fontImageAlphabet}
                              alt={googleAltFont.fontImageAlt}
                            />
                            <a
                              className="post-item_header"
                              href={googleAltFont.fontLink}
                            >
                              <strong>{googleAltFont.fontName}</strong>
                            </a>
                            {ReactHtmlParser(googleAltFont.description)}
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
                            <img
                              className="img-fluid"
                              src={x.fontImageSentence}
                              alt={x.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={fontSquirrelAltFont.fontImageSentence}
                              alt={fontSquirrelAltFont.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={x.fontImageAlphabet}
                              alt={x.fontImageAlt}
                            />
                            <img
                              className="img-fluid"
                              src={fontSquirrelAltFont.fontImageAlphabet}
                              alt={fontSquirrelAltFont.fontImageAlt}
                            />
                            <a
                              className="post-item_header"
                              href={fontSquirrelAltFont.fontLink}
                            >
                              <strong>{fontSquirrelAltFont.fontName}</strong>
                            </a>

                            {ReactHtmlParser(fontSquirrelAltFont.description)}
                          </li>
                        </ul>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </article>
      <AuthorBox />
    </Layout>
  );
};

export default ViewFont;
