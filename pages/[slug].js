import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import client from "../client";
import Layout from "../components/Layout";
import AuthorBox from "../components/AuthorBox";

const Post = (props) => {
  const { title = "missing title", body = [] } = props;
  return (
    <Layout>
      <article>
        <div className="title-background">
          <h1 className="title">{title}</h1>
        </div>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <BlockContent
              blocks={body}
              imageOptions={{ w: 800, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </div>
      </article>
      <AuthorBox />
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
