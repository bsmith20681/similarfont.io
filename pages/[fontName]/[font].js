import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import DataBase from "../../data/database.json";
import { NextSeo } from "next-seo";

const ViewFont = () => {
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
              <h1 classname="title">
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
                  <div>
                    <h2>{ReactHtmlParser(x.description)}</h2>
                    <h2>
                      Here are some google alternative fonts for {x.fontName}
                    </h2>
                    {x.googleAlternatives.map((font) => {
                      const googleAltFont = DataBase.find(
                        (item) => item.fontName === font
                      );

                      return (
                        <ul className="post-item_list">
                          <li className="post-item" key={googleAltFont.id}>
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
                    <h2>
                      Here are some free font alternatives from Font Squireel
                      for {x.fontName}
                    </h2>
                    {x.fontSquirrelAlternatives.map((font) => {
                      const fontSquirrelAltFont = DataBase.find(
                        (item) => item.fontName === font
                      );
                      return (
                        <ul className="post-item_list">
                          <li
                            className="post-item"
                            key={fontSquirrelAltFont.id}
                          >
                            <img
                              src={fontSquirrelAltFont.fontImage}
                              alt={fontSquirrelAltFont.fontImageAlt}
                            />
                            <p>
                              <strong>{fontSquirrelAltFont.fontName}</strong>
                            </p>
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
    </Layout>
  );
};

export default ViewFont;
