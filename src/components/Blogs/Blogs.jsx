import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Blogs = ({ time, setTime }) => {
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
          <SingleCard blog={blog} time={time} setTime={setTime}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
