import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "./Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  console.log(articles); //*TESTING

  return (
    <>
      <h1 className="text-center text-xl font-semibold mt-5">RSS-FEED</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">
        Good Morning, Gerges
      </h2>
      {articles.map((article, idx) => (
        <Feed
          title={article.item.title}
          link={article.item.link}
          date={article.item.pubDate}
          key={idx}
        />
      ))}
    </>
  );
}

export default App;
