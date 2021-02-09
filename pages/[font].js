import Layout from "../components/Layout";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import DataBase from "../data/database.json";

const ViewFont = () => {
  const router = useRouter();
  const { font } = router.query;
  const grabFontFromURL = `${font}`.split("-").pop();
  const filteredFonts = DataBase.filter((x) => x.fontName == grabFontFromURL);

  return (
    <Layout>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-8">
          <div className="row">
            {filteredFonts.map((x, i) => {
              return (
                <div>
                  <h1>
                    {x.googleAlternatives.length} Google Font Alternatives to{" "}
                    {x.fontName}
                  </h1>
                  <h2>{ReactHtmlParser(x.description)}</h2>
                  <h2>
                    Here are some google alternative fonts for {x.fontName}
                  </h2>
                  {x.googleAlternatives.map((font) => {
                    const googleAltFont = DataBase.find(
                      (item) => item.fontName === font
                    );

                    return (
                      <ul>
                        <li>
                          <img
                            src={googleAltFont.fontImage}
                            alt={googleAltFont.fontImageAlt}
                          />
                          <p>
                            <strong>{googleAltFont.fontName}</strong>
                          </p>
                          <p>{ReactHtmlParser(googleAltFont.description)}</p>
                        </li>
                      </ul>
                    );
                  })}
                  <h2>
                    Here are some free font alternatives from Font Squireel for{" "}
                    {x.fontName}
                  </h2>
                  {x.fontSquirrelAlternatives.map((font) => {
                    const fontSquirrelAltFont = DataBase.find(
                      (item) => item.fontName === font
                    );
                    return (
                      <ul>
                        <li>
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
    </Layout>
  );
};

export default ViewFont;
