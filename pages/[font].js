import Layout from "../components/Layout";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import DataBase from "../data/database.json";

const ViewFont = () => {
  const router = useRouter();
  const { font } = router.query;
  const grabFontFromURL = `${font}`.split("-").pop();
  const test = DataBase.filter((x) => x.fontName == grabFontFromURL);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <Image src="/images/fontImages/futura.jpg" width={638} height={110} />
          {test.map((x, i) => {
            return (
              <div>
                <h1>
                  {x.googleAlternatives.length} Google Font Alternatives to{" "}
                  {x.fontName}
                </h1>
                <h2>{ReactHtmlParser(x.description)}</h2>
                <h2>Here are some google alternative fonts for {x.fontName}</h2>
                {x.googleAlternatives.map((font) => {
                  return (
                    <ul>
                      <li>{font}</li>
                    </ul>
                  );
                })}
                <h2>
                  Here are some free font alternatives from Font Squireel for{" "}
                  {x.fontName}
                </h2>
                {x.fontSquirrelAlternatives.map((font) => {
                  return (
                    <ul>
                      <li>{font}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ViewFont;
