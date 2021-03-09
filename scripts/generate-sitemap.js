const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "similarfont.io",
  pagesDirectory: path.resolve(__dirname, "../build/server/pages/"),
  targetDirectory: path.resolve(__dirname, "../build/server/pages/"),
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
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});
