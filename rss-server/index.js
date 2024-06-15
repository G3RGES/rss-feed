import cors from "cors";
import express from "express";

import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();

let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  //   console.log(feed.title);//*TESTING

  feed.items.forEach((item) => {
    //   console.log(`${item.title}\n ${item.link}\n\n `)//*TESTING
    articles.push(item);
  });
};

parse(feedURL);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const server = app.listen("4000", () => {
  console.log("App is Listening");
});

export default server;
