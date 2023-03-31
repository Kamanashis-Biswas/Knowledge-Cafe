import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Blogs = ({ states }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <SingleCard blog={blog} states={states}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
