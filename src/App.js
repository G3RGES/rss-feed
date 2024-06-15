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

      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl ">
        <div className="bg-black flex flex-col items-center border rounded-lg p-2 mb-5">
          <img
            className=""
            src="https://cdn-images-1.medium.com/max/273/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png"
            alt="netflix_TechBlog"
          />
        </div>
        {articles.map((article, idx) => (
          <Feed
            title={article.title}
            link={article.link}
            date={article.pubDate}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}

export default App;
