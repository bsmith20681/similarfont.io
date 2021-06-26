const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://similarfont.io",
  pagesDirectory: path.resolve(__dirname, "../.next/server/pages/"),
  targetDirectory: path.resolve(__dirname, "../public/"),
  sitemapFilename: "sitemap.xml",
  /* 
  ignordedExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jepg",
    "jpg",
    "icon",
  ],
  */
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});
