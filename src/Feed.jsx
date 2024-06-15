import React from "react";

const Feed = ({ title, link, date }) => {
  let formattedDate = { day: "numeric", month: "long", year: "numeric" };

  let articleDate = new Date(date).toLocaleDateString("en-EG", formattedDate);

  return (
    <>
      <a
        className="hover:text-blue-700"
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        <h3 className="text-xl mb-1 font-semibold">{title}</h3>
      </a>
      <p className="">{articleDate}</p>
    </>
  );
};

export default Feed;
