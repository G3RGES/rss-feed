import cors from "cors";
import express from "express";

import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(`${item.title}\n ${item.link}\n\n `);
  });
};

parse(feedURL);

let app = express();
app.use(cors());

const server = app.listen("4000", () => {
  console.log("App is Listening");
});

export default server;
