import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect, useLayoutEffect } from "react";
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
          {test.map((x, i) => {
            return (
              <div>
                <h1>{x.fontName}</h1>
                <h2>{x.description}</h2>
                <h2>Here are some google alternative fonts for {x.fontName}</h2>
                {x.googleAlternatives.map((font) => {
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
