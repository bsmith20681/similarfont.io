import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import groq from "groq";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import client from "../client";
import Layout from "../components/Layout";
import AuthorBox from "../components/AuthorBox";

const Post = ({ data }) => {
  //using router.isFallback because data is returning as undefined for a short second then it will populate the data thus throwing an error
  const router = useRouter();
  if (router.isFallback) {
    return <h3>loading...</h3>;
  }
  const { title, body, metaTitle, metaDescription } = data;

  return (
    <Layout>
      <NextSeo title={metaTitle} description={metaDescription} />
      <article>
        <div className="title-background">
          <h1 className="title">{title}</h1>
        </div>
        <div className="container">
          <div className="col-md-8 margin-center-content">
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

export async function getStaticPaths() {
  const fetchAllPosts = await client.fetch(
    '*[_type == "post"]{slug}|order(publishedAt desc)'
  );

  //maping over array of posts because groq isn't allowing me to pull just the slug from the slug object must be a bug from sanity
  const pullSlugsFromPosts = fetchAllPosts.map((post) => post.slug.current);

  const paths = pullSlugsFromPosts.map((slug) => ({
    params: {
      slug: slug.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const allPosts = await client.fetch(
    '*[_type == "post"]|order(publishedAt desc)'
  );

  const singlePost = allPosts.filter((post) => post.slug.current === slug);
  const singlePostObject = { ...singlePost[0] }; //singlePost returns an array with only item, converting into object to be used through article

  return {
    props: { data: singlePostObject },
  };
}

/*
Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
*/

export default Post;